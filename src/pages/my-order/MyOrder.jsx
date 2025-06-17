import { useEffect, useState } from "react";
import useAuth from "../../hooks/UseAuth";
import logo from "../../assets/logo/logo.png";
import Swal from "sweetalert2";
import {} from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const MyOrder = () => {
  const { user } = useAuth();
  const [orderData, setorderData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/buy?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setorderData(data);
      });
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will delete order!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/buy/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            // remove the coffee from the state
            const remainingOrders = orderData.filter((odr) => odr._id !== _id);
            setorderData(remainingOrders);
          });
      }
    });
  };
  return (
    <div className="bg-black">
      <div className="overflow-x-auto mt-16">
        <div className="flex justify-center items-center">
          <h1 className=" text-center text-3xl py-4">Your Orders </h1>
          <img className="w-12 h-12 rounded-full" src={logo} alt="" />
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Product-Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((order) => (
              <tr order={order} key={order._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={order.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{order.name}</td>
                <td>{order.user_email}</td>
                <td>{order.price}</td>
                <td>{order.category}</td>
                <th>
                  <button
                    onClick={() => handleDelete(order._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <MdDelete className="text-2xl text-red-600" />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
