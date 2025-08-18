import { useContext } from "react";
import { context } from "../../../App";
const Branddigi = () => {
  const products = useContext(context);
  return (
    <>
      <div className="brand w-full h-fit hidden lg:grid grid-cols-8  mt-10 sticky z-[1003] ">
        {products.branddigi.map((item) => (
          <div
            key={item.id}
            className="box  h-[80px] border-l-[1px] border-[#dadada] bg-[#f0f0f1]  flex justify-center items-center "
          >
            <img src={item.image} className=" w-[107px] h-[20px] " alt="" />
          </div>
        ))}
        {products.branddigi2.map((item) => (
          <div key={item.id} className="box h-[80px] col-span-2 border-r-[1px] border-[#dadada] bg-[#f0f0f1] flex justify-center items-center " >
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Branddigi;
