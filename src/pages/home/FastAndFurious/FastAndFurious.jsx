import img1 from "../../../assets/f.fImage/grid-8x2-1.jpg";
import img2 from "../../../assets/f.fImage/grid01.jpg";
import img3 from "../../../assets/f.fImage/grid-5.jpg";
import img4 from "../../../assets/f.fImage/grid-6.jpg";
import img5 from "../../../assets/f.fImage/grid-7.jpg";
import { Link } from "react-router-dom";

const FastAndFurious = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" text-black">
      <div className="md:grid grid-cols-6 p-4 ">
        <div className="sm:col-span-2 col sm:row-span-2 mx-auto">
          <img src={img1} className="md:max-w-sm shadow-2xl" />
        </div>
        <div className="sm:col-span-4 col sm:row-span-4 mx-auto space-y-2">
          <div className="flex gap-1 justify-start items-center">
            <small className="text-xs font-bold  text-red-600 text-start uppercase">
              Fast and Furious.
            </small>
            <div className="divider divider-star bg-base-100 w-20 h-0.5"></div>
          </div>
          <h1 className="text-1xl uppercase font-bold font-Roboto Slab">
            Trusted by world wide sports persons & accademy.
          </h1>
          <small className="text-gray-700">
            Fusce ornare metus facilisis finibus tristique. Suspendisse
            fringilla elit eu tellus sodales accumsan. Donec eu orci sed augue
            mollis gravida. Curabitur interdum magna erat, non finibus ipsum
            laoreet Maecenas lectus nunc, sodales nec felis efficitur porta
            felis. Phasellus aliquam maximus quam, sed facilisis lorem congue
            eu. mattis justo ut nulla.
          </small>
          <br />
          <Link to="All-Products" className="text-white">
            <button
              type="submit"
              className=" bg-red-600 hover:bg-slate-200 hover:text-black transition duration-400 ease-in px-3 text-center w-40 py-1 mt-4 "
            >
              More Products
            </button>
          </Link>
          <div className="relative max-w-3xl flex gap-4 py-6 overflow-x-auto">
            <img
              className="h-52 py-1 aspect-video rounded-sm object-cover object-center "
              src={img2}
              alt="Image 1"
            />
            <img
              className="h-48 aspect-video rounded-sm object-cover object-center"
              src={img3}
              alt="Image 2"
            />
            <img
              className="h-48 aspect-video rounded-sm object-cover object-center "
              src={img4}
              alt="Image 3"
            />
            <img
              className="h-48 aspect-video rounded-sm object-cover object-center "
              src={img5}
              alt="Image 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FastAndFurious;
