import { useContext } from "react";
import { context } from "../../../App";
const Downlodeapp = () => {
    const products = useContext(context);
    return ( <>
    <div className="app w-[98%] max-w-[1680px]  h-[75px] mx-auto bg-[#3c4b6d] items-center gap-3 relative rounded-md mt-10 hidden lg:flex ">
        <div className="img w-[50px] h-[50px] mr-4  rounded-lg ">
            <img src="https://www.digikala.com/statics/img/png/footerlogo2.webp" className=" w-full h-full  " alt="" />
        </div>
        <span className=" text-[21px] mr-2  text-white " >
             دانلود اپلیکیشن دیجی‌کالا
        </span>
        <div className=" flex gap-5 absolute left-24 " >
        {products.app.map((item)=>(
            <div key={item.id} className="app w-fit h-fit  flex justify-center items-center rounded-md ">
                <a href="">
                    <img src={item.image} className=" w-full h-full rounded-md  " alt="" />
                </a>
            </div>
        ))}
        </div>
        <div className=" w-[50px] h-[44px] bg-white rounded-md absolute left-6 flex justify-center  items-center ">
            <a href="">
                <img src="https://www.digikala.com/statics/img/svg/More.svg" className=" w-[43px] h-[44px] " alt="" />
            </a>
        </div>
    </div>
    </> );
}
 
export default Downlodeapp;