import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const AllServices = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://prime-play-sports-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="bg-white mt-16 ">
      <h1 className="text-3xl py-4 font-bold text-red-900 text-center uppercase">
        All Products
      </h1>
      <div className="grid md:grid-cols-4 ">
        {products.map((product) => (
          <div product={product} key={product._id}>
            <div>
              <div className=" md:w-72 shadow-md mx-auto">
                <figure>
                  <img
                    src={product.image}
                    className="w-72 h-72 mx-auto"
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title text-sm">{product.name}</h2>
                  <div className="flex justify-between items-center">
                    <p className="font-bold text-red-600 font-sans">
                      Price :$ {product.price}
                    </p>
                    <p className="font-bold text-gray-600">
                      Stock Availability :{product.stockQuantity}
                    </p>
                  </div>
                  <div className="">
                    <Link to={`/details/${product._id}`}>
                      <div className="badge badge-outline text-black w-full hover:bg-red-900 transition duration-300 ease-in">
                        See More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/"
        className=" text-black py-4 flex justify-center items-center"
      >
        <IoMdArrowBack className="text-1xl text-red-900 font-extrabold" />
        <button className="uppercase text-red-900 font-bold">Back-Home</button>
      </Link>
    </div>
  );
};

export default AllServices;
