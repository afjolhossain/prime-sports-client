import Fimg1 from "../../../assets/followsImage/grid02.jpg";
import Fimg2 from "../../../assets/followsImage/grid03.jpg";
import Fimg3 from "../../../assets/followsImage/grid04.jpg";
import Fimg4 from "../../../assets/followsImage/grid05.jpg";
import Fimg5 from "../../../assets/followsImage/grid07.jpg";

const FollowUs = () => {
  return (
    <div className="text-black">
      <div className="divider divider-error text-red-600 text-xs font-bold uppercase max-w-xs mx-auto ">
        instashop
      </div>
      <p className="uppercase font-bold text-center text-1xl">
        Follow us on Instagram
      </p>

      <section className="py-6 ">
        <div className="container grid grid-cols-2 gap-2 p-4 mx-auto md:grid-cols-4">
          <img
            src={Fimg1}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
            src={Fimg2}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
            src={Fimg3}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
            src={Fimg4}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
            src={Fimg5}
          />
        </div>
      </section>
    </div>
  );
};

export default FollowUs;
