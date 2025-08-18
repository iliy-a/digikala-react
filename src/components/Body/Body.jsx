import { useContext } from "react";
import { context } from "../../App";
import AmazingOffer from "../AmazingOffer/AmazingOffer";
import BanerLg from "../BanrLg/BanerLg";
import Box from "../Box/Box";
import Item from "../Item/Item";
import Menu from "../Menu/Menu";
import Slider from "../Slider/Slider";
import StorySlider from "../StorySlider/StorySlider";
import HayperShegeft from "../HayperShegeft/HayperShegeft";
import Category from "../Category/Category";
import BanerBox from "../BanerBox/BanerBox";
import FavoritBrand from "../FavoriteBrand/FavoriteBrand";
import Products from "../Products/Products";
import Bestsellers from "../Bestsellers/Bestsellers";
import SelectProduct from "../SelectProduct/SelectProduct";
import Newsdigi from "../Newsdigi/Newsdigi";
import Head from "../Head/Head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Support from "../Support/Support";
import Haypersabad from "../Haypersabad/Haypersabad";

const Body = () => {
  const products = useContext(context);
  return (
    <>
      <main>
        <Head/>
        <Header/>
        <Menu />
        <StorySlider />
        <Slider />
        <BanerLg />
        <Item />
        <AmazingOffer />
        <Box items={products.box} />
        <HayperShegeft />
        <Box items={products.box2} />
        <Category />
        <BanerBox items={products.baner} />
        <FavoritBrand />
        <BanerBox items={products.baner2} />
        <Products items={products.kala} />
        <Bestsellers items={products.bestsell} />
        <Products items={products.kala2} />
        <SelectProduct />
        <Bestsellers items={products.bestsell2} />
        <Newsdigi />
        <Footer/>
        <Support/>
        <Haypersabad/>
      </main>
    </>
  );
};

export default Body;
