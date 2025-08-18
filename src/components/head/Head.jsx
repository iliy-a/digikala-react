import { memo, useContext } from "react";
import { context } from "../../App";

const Head = () => {
  const products = useContext(context);
  return (
    <>
      {products.head.map((product) => (
        <div key={product.id} className=" w-full  h-[35px] md:h-[60px] cursor-pointer sticky top-0 z-[1000] ">
          <img src={product.image} alt="" className=" w-full h-full  object-cover " />
        </div>
      ))}
    </>
  );
};

export default memo(Head);
