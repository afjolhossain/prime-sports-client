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
          <img src={image} className="w-72 h-72" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-sm">{name}</h2>
          <div className="flex justify-between items-center">
            <p className="font-bold text-red-600 font-sans">Price :$ {price}</p>
            <p className="font-bold text-gray-600">
              Stock Availability :{stockQuantity}
            </p>
          </div>
          <div className="">
            <Link to={`/details/${_id}`}>
              <div className="badge badge-outline text-black w-full hover:bg-red-900  transition duration-300 ease-in ">
                See More
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
