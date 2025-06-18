import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../../../assets/banner-img/banner-1.jpg";
import banner2 from "../../../assets/banner-img/Slider-2.jpg";
import banner3 from "../../../assets/banner-img/Slider-3.jpg";

const Banner = () => {
  return (
    <Carousel className="mt-10">
      <div className="hero ">
        <img src={banner1} className="" alt="" />
        <div className=" md:w-10/12 md:text-start sm:text-center ">
          <div className=" space-y-3 flex flex-col ">
            <h1 className=" text-2xl xs:text-1xl font-bold font-Roboto Slab">
              STRETCHONG IS NEVER DONE
            </h1>
            <p className="text-xs font-thin text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
        </div>
      </div>
      <div className="hero ">
        <img src={banner2} className="" alt="" />
        <div className=" md:w-10/12 md:text-end sm:text-center ">
          <div className=" space-y-3 ">
            <h1 className=" text-2xl xs:text-1xl font-bold font-Roboto Slab">
              STRETCHONG IS NEVER DONE
            </h1>
            <p className="text-xs font-thin text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
        </div>
      </div>

      <div className="hero">
        <img src={banner3} alt="" />
        <div className="md:w-10/12 md:text-start sm:text-center">
          <div className=" space-y-4 flex-col  ">
            <h1 className=" text-2xl font-bold text-white font-Roboto Slab">
              STRETCHONG IS NEVER DONE
            </h1>
            <p className="text-xs font-thin text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
