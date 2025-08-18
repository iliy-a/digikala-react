import { useContext } from "react";
import { context } from "../../App";
import Calldigi from "./Calldigi/Calldigi";
import About from "./About/About";
import Belivebox from "./Belivebox/Belivebox";
import Aboutlg from "./Aboutlg/Aboutlg";
import Downlodeapp from "./Downlodeapp/Downlodeapp";
import Tex from "./Tex/Tex";
import Branddigi from "./Branddigi/Branddigi";
const Footer = () => {
  const products = useContext(context);
  return (
    <>
      <footer className=" w-full h-fit  mt-14 border-t  pt-6   ">
        <div className=" w-full relative max-w-[1680px] mx-auto mt-6 " >
        <div className="up  flex justify-center   text-[14px] items-center gap-2 lg:w-[138px] lg:h-[40px] lg:absolute lg:left-11 lg:border lg:rounded-lg ">
          <a href="">بازگشت به بالا</a>
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            className="  mb-1 "
          >
            <defs>
              <symbol
                id="expandLess"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path>
              </symbol>
            </defs>
            <g>
              <path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path>
            </g>
          </svg>
        </div>
        </div>
        <div className="icon w-full max-w-[1680px] mx-auto  h-fit  hidden lg:block ">
          <div className="img w-[195px] h-[50px]  m-4 ">
            <img
              src="https://www.digikala.com/brand/full-horizontal.svg"
              className=" w-full h-full "
              alt=""
            />
          </div>
          <div className="tex w-fit h-[30px] text-[#3F4064] flex gap-2 items-center text-[12px] p-3 ">
            <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</p>
            <div className=" w-[1px] h-[9px] bg-[#cccccc] "></div>
            <p>۰۲۱-۹۱۰۰۰۱۰۰</p>
            <div className=" w-[1px] h-[9px] bg-[#cccccc] "></div>
            <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
          </div>
        </div>
        <Belivebox />
        <Aboutlg />
        <Downlodeapp />
        <Calldigi items={products.footer} />
        <About />
        <Tex />
        <div className=" text-center texe text-[11px] text-[#81858B]  mt-8 ">
          <span>
            {" "}
            برای استفاده از مطالب دیجی‌کالا، داشتن «هدف غیرتجاری» و ذکر «منبع»
            کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت نوآوران فن آوازه
            (فروشگاه آنلاین دیجی‌کالا) است.{" "}
          </span>
        </div>
        <Branddigi/>
      </footer>
    </>
  );
};

export default Footer;
