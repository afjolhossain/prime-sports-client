import banner1 from "../../../assets/category/grid-1x2.jpg";
import banner2 from "../../../assets/category/grid-2x2.jpg";
import banner3 from "../../../assets/category/grid-3x2.jpg";
const CategoryImage = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4 px-4">
      <div
        className="hero h-36 "
        style={{
          backgroundImage: `url(${banner1})`,
        }}
      >
        <div className="hero-overlay "></div>
        <div className="hero-content text-neutral-content text-center h-36">
          <div className="text-start">
            <div className="flex justify-start items-center gap-1">
              <h1 className="text-xs font-bold">MEN</h1>
              <div className="divider divider-start bg-red-600 w-20 h-0.5"></div>
            </div>
            <h1 className="text-2xl font-bold hover:text-red-700 transition duration-200 ease-in">
              SPORTS CLOTHING
            </h1>
            <button className="btn btn-xs bg-red-600 p-4 text-black hover:bg-white  transition duration-200">
              More
            </button>
          </div>
        </div>
      </div>
      <div
        className="hero h-36"
        style={{
          backgroundImage: `url(${banner2})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-start h-36 ">
          <div className="">
            <div className="flex justify-start items-center gap-1">
              <h1 className="text-xs font-bold">WOMEN</h1>
              <div className="divider divider-start bg-red-600 w-20 h-0.5"></div>
            </div>
            <h1 className=" text-2xl font-bold hover:text-red-700 transition duration-200 ease-in">
              ULTIMATE LEGGINGS
            </h1>
            <button className="btn btn-xs bg-red-600 p-4 text-black hover:bg-white  transition duration-200">
              More
            </button>
          </div>
        </div>
      </div>
      <div
        className="hero h-36"
        style={{
          backgroundImage: `url(${banner3})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-srart h-36">
          <div>
            <div className="flex justify-start items-center gap-1 ">
              <h1 className="text-xs font-bold">MEN</h1>
              <div className="divider divider-start bg-red-600 w-20 h-0.5 font-bold"></div>
            </div>
            <h1 className="text-2xl font-bold hover:text-red-700 transition duration-200 ease-in">
              SPORTS T-SHARTS
            </h1>
            <button className="btn btn-xs bg-red-600 p-4 text-black hover:bg-white  transition duration-200">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryImage;
