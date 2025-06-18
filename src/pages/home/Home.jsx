import AdMarquee from "./AddMarquee/AdMarquee";
import Banner from "./Banner/Banner";
import CategoryImage from "./CategoryImage/CategoryImage";
import FastAndFurious from "./FastAndFurious/FastAndFurious";
import FollowUs from "./FollowUs/FollowUs";
import NewArrival from "./NewArival/NewArrival";
import Policy from "./policy/Policy";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div className="bg-[#ffffff] md:max-w-7xl mx-auto ">
      <Banner></Banner>
      <CategoryImage></CategoryImage>
      <NewArrival></NewArrival>
      <Products></Products>
      <FollowUs></FollowUs>
      <AdMarquee></AdMarquee>
      <FastAndFurious></FastAndFurious>
      <Policy></Policy>
    </div>
  );
};

export default Home;
