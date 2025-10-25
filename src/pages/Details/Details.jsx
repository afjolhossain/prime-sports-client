import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/UseAuth";
import Swal from "sweetalert2";

const Details = () => {
  const productData = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const {
    name,
    image,
    category,
    description,
    price,
    processingTime,
    stockQuantity,
    user_email = user?.email,
    _id,
  } = productData;

  const handleBuyButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const category = form.category.value;
    const price = form.price.value;
    const description = form.description.value;

    const buyData = {
      name,
      category,
      price,
      description,
      image,
      user_email,
    };
    fetch("https://prime-play-sports-server.vercel.app/buy", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(buyData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Order has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/myorder");
        }
      });
  };
  return (
    <div className="max-w-7xl bg-white p-4">
      <div className="hero bg-white p-8">
        <div>
          <h1 className="text-2xl font-bold mt-10 text-center  text-black py-5">
            Details of <span className="text-red-600">{name}</span>
          </h1>
          <div className=" md:flex lg:flex-row gap-x-6 justify-center items-center">
            <img
              src={image}
              className="w-96 h-96 rounded-lg shadow-md shadow-green-500"
            />
            <div className="bg-gray-100 border border-gray-500 rounded">
              <form
                onSubmit={handleBuyButton}
                className="max-w-md mx-auto text-black space-y-4 p-6 font-thin"
              >
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  className="input w-full bg-white border border-gray-500"
                />
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="input w-full font-bold bg-white border border-gray-500"
                />

                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  className="input w-full bg-white border border-gray-500"
                />
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  className="input w-full bg-white border border-gray-500"
                />
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  className="input w-full bg-white border border-gray-500"
                />

                <button type="submit" className="btn btn-primary w-full">
                  Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black  mx-auto  space-y-3 p-4 font-thin text-center ">
        <p className="font-bold text-red-600">Details of Product</p>
        <div className="md:grid grid-cols-3 gap-4">
          <div className="text-start">
            <p>
              <span className="font-bold">Description</span> : {description}
            </p>
          </div>
          <div className="text-start">
            <p>
              <span className="font-bold">Category</span> :{category}
            </p>
            <p>
              <span className="font-bold">Price</span> : {price}
            </p>
          </div>
          <div className="text-start">
            <p>
              <span className="font-bold">Processing Time</span> :
              {processingTime}
            </p>
            <p>
              <span className="font-bold">Stock Quantity</span> :{stockQuantity}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
