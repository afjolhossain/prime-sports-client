import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);
  const {
    name,
    image,
    category,
    description,
    price,
    processingTime,
    stockQuantity,
    _id,
  } = product;
  return (
    <div>
      <div className=" md:w-72 shadow-md mx-auto">
        <figure>
          <img src={image} className="w-72 h-72 mx-auto" alt="Shoes" />
        </figure>
        <div className="card-body mx-auto">
          <h2 className="card-title text-sm">{name}</h2>
          <div className="flex justify-between items-center">
            <p className="font-bold text-red-600 font-sans">Price :$ {price}</p>
            <p className="font-bold text-gray-600">
              Stock Availability :{stockQuantity}
            </p>
          </div>
          <div className="text-white">
            <Link to={`/details/${_id}`}>
              <button
                type="submit"
                className="block bg-red-600 hover:bg-slate-200 hover:text-black transition duration-400 ease-in px-3 text-center w-full py-1 "
              >
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
