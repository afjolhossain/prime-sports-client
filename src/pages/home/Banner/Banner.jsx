import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner-img/banner-1.jpg";
import banner2 from "../../../assets/banner-img/Slider-2.jpg";
import banner3 from "../../../assets/banner-img/Slider-3.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Carousel className="mt-12">
      <div className="hero ">
        <img src={banner1} className="" alt="" />
        <div className=" md:w-10/12 md:text-start sm:text-center p-6 ">
          <div className=" space-y-3  flex-col ">
            <h1 className=" text-white  text-2xl xs:text-1xl font-bold font-Roboto Slab ">
              STRETCHONG IS NEVER DONE
            </h1>
            <p className="text-xs font-thin text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>

            <Link to="All-Products">
              <button
                type="submit"
                className=" bg-red-600 text-white hover:bg-slate-200 hover:text-black transition duration-400 ease-in px-3 text-center w-40 py-1 mt-4 "
              >
                More Products
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="hero ">
        <img src={banner2} className="" alt="" />
        <div className=" md:w-10/12 md:text-end sm:text-center p-6 ">
          <div className=" space-y-3 ">
            <h1 className=" text-white text-2xl xs:text-1xl font-bold font-Roboto Slab">
              STRETCHONG IS NEVER DONE
            </h1>
            <p className="text-xs font-thin text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <Link to="All-Products">
              <button
                type="submit"
                className=" text-white bg-red-600 hover:bg-slate-200 hover:text-black transition duration-400 ease-in px-3 text-center w-40 py-1 mt-4 "
              >
                More Products
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="hero">
        <img src={banner3} alt="" />
        <div className="md:w-10/12 md:text-start sm:text-center p-6">
          <div className=" space-y-4 flex-col">
            <h1 className=" text-2xl font-bold text-white font-Roboto Slab">
              STRETCHONG IS NEVER DONE
            </h1>
            <p className="text-xs font-thin text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <Link to="All-Products">
              <button
                type="submit"
                className=" text-white bg-red-600 hover:bg-slate-200 hover:text-black transition duration-400 ease-in px-3 text-center w-40 py-1 mt-4 "
              >
                More Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
