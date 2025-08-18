import { useContext } from "react";
import { context } from "../../../App";
const Belivebox = () => {
  const products = useContext(context);
  return (
    <>
      <div className="box w-full max-w-[1680px] mx-auto  h-[100px] hidden lg:flex ">
        {products.belive.map((item) => (
          <div key={item.id} className="img w-[325px] cursor-pointer h-full flex justify-center items-center relative ">
            <img
              src={item.image}
              alt=""
            />
            <span className=" absolute top-[75px] text-[11px]  text-[#3F4064] ">
                {item.tex}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Belivebox;
