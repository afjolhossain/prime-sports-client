import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import banner1 from "../../../assets/banner-img/banner-1.jpg";
import banner2 from "../../../assets/banner-img/Slider-2.jpg";
import banner3 from "../../../assets/banner-img/Slider-3.jpg";

const Banner = () => {
  return (
    <Carousel>
      <div className="hero ">
        <img src={banner1} alt="" />
        <div className="md:w-10/12 md:text-start sm:text-center">
          <div className=" space-y-3 flex-col">
            <h1 className=" text-2xl font-bold font-Roboto Slab">
              <span className="text-red-600">STRETCHONG</span> IS NEVER DONE
            </h1>
            <p className="text-xs font-thin text-gray-500">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <button className="btn btn-outline btn-success">Success</button>
          </div>
        </div>
      </div>

      <div className="hero ">
        <img src={banner2} alt="" />
        <div className="w-10/12 md:text-end sm:text-center ">
          <div className="md:grid grid-cols-2 text-start">
            <div></div>
            <div className="space-y-4">
              <h1 className=" text-2xl font-bold font-Roboto Slab">
                <span className="text-red-600">STRETCHONG</span> IS NEVER DONE
              </h1>
              <p className="text-xs font-thin text-gray-500">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi.
              </p>
              <button className="btn btn-outline btn-success">Success</button>
            </div>
          </div>
        </div>
      </div>
      <div className="hero ">
        <img src={banner3} alt="" />
        <div className="w-10/12 md:text-start sm:text-center">
          <div className=" space-y-4 flex-col  ">
            <h1 className=" text-2xl font-bold font-Roboto Slab">
              <span className="text-red-600">STRETCHONG</span> IS NEVER DONE
            </h1>
            <p className="text-xs font-thin text-gray-500">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi.
            </p>
            <button className="btn btn-outline btn-success">Success</button>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
