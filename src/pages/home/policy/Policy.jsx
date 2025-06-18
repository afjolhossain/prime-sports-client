import { FaGift, FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";

const Policy = () => {
  return (
    <div className="text-black grid md:grid-cols-3 max-w-6xl mx-auto py-10 px-4">
      <div className="flex items-center gap-2">
        <FaShippingFast className="text-[60px] text-red-800" />

        <div>
          <div className="flex justify-start items-center gap-1">
            <h1 className="text-xs font-bold uppercase">free</h1>
            <div className="divider divider-start bg-red-600 w-20 h-0.5"></div>
          </div>
          <h1 className="text-1xl uppercase font-bold">Free Shipping</h1>
          <p className="text-xs text-gray-600">
            Consectetur adipiscing elit pellentesque habitant morbi tristique.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <GiReturnArrow className="text-[60px] text-red-800" />

        <div>
          <div className="flex justify-start items-center gap-1">
            <h1 className="text-xs font-bold uppercase">returns</h1>
            <div className="divider divider-start bg-red-600 w-20 h-0.5"></div>
          </div>
          <h1 className="text-1xl uppercase font-bold">
            24 Days Return Policy
          </h1>
          <p className="text-xs text-gray-600">
            Dictumst vestibulum rhoncus est pellentesque.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FaGift className="text-[60px] text-red-800" />

        <div>
          <div className="flex justify-start items-center gap-1">
            <h1 className="text-xs font-bold uppercase">Gifts</h1>
            <div className="divider divider-start bg-red-600 w-20 h-0.5"></div>
          </div>
          <h1 className="text-1xl uppercase font-bold">Free coupon Codes</h1>
          <p className="text-xs text-gray-600">
            Cum sociis natoque olutpat blandit aliquam etiam erat velit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
