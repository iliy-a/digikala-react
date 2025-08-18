import { useContext } from "react";
import { context } from "../../App";
const BanerLg = () => {
  const products = useContext(context);
  return (
    <>
      {products.banerlg.map((product) => (
        <div key={product.id} className="w-[96%] h-fit mt-6 mx-auto  lg:hidden ">
            <a href="">
                <img className="rounded-2xl" src={product.image} alt="" />
            </a>
        </div>
      ))}
    </>
  );
};

export default BanerLg;
