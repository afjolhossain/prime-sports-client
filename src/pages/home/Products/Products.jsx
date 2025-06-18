import { useEffect, useState } from "react";
import Product from "../product/Product";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://prime-play-sports-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="text-black py-12 bg-white ">
      <div className="divider uppercase text-center mt-8">trending</div>
      <p className="uppercase font-bold text-center text-2xl">new arrival</p>

      <div className="grid md:grid-cols-4 gap-4 py-6 mx-auto">
        {products.slice(0, 4).map((product) => (
          <Product product={product} key={product._id}></Product>
        ))}
      </div>
      <Link
        to="/All-Products"
        className="flex justify-center py-4 font-bold items-center  "
      >
        <button className="uppercase text-red-900 ">More Products</button>
        <IoIosArrowRoundForward className="text-2xl text-red-900 font-extrabold" />
      </Link>
    </div>
  );
};

export default Products;
