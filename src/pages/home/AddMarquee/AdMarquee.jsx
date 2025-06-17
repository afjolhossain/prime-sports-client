import Marquee from "react-fast-marquee";
import marquee1 from "../../../assets/marqueeImage/brlog01.png";
import marquee2 from "../../../assets/marqueeImage/brlog02.png";
import marquee3 from "../../../assets/marqueeImage/brlog03.png";
import marquee4 from "../../../assets/marqueeImage/brlog04.png";
import marquee5 from "../../../assets/marqueeImage/brlog05.png";
import marquee6 from "../../../assets/marqueeImage/brlog06.png";
import marquee7 from "../../../assets/marqueeImage/brlog07.png";

const AdMarquee = () => {
  return (
    <div className="bg-white">
      <Marquee pauseOnHover>
        <div className="flex  p-4 h-24  gap-x-20 ">
          <img className="h-10" src={marquee6} alt="" />
          <img className="h-10" src={marquee2} alt="" />
          <img className="h-10" src={marquee3} alt="" />
          <img className="h-10" src={marquee4} alt="" />
          <img className="h-10" src={marquee5} alt="" />
          <img className="h-10" src={marquee1} alt="" />
          <img className="h-10" src={marquee7} alt="" />
        </div>
      </Marquee>
    </div>
  );
};

export default AdMarquee;
