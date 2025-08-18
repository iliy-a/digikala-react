import { useContext } from "react";
import { context } from "../../App";
const Newsdigi = () => {
  const products = useContext(context);
  return (
    <>
      <div className="tex max-w-[1368px]  lg:w-[87%]  mx-auto h-[100px]  text-[16px] leading-[100px] pr-9 relative ">
        <span>خواندنی‌ها</span>
        <span className="  absolute left-14 text-[12px] cursor-pointer text-[#19BFD3] ">
          مطالب بیشتر در دیجی‌کالا مگ
        </span>
        <div className="svg absolute left-8 top-9 cursor-pointer  ">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#19BFD3"
          >
            <defs>
              <symbol
                id="chevronLeft"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path>
              </symbol>
            </defs>
            <g fill="#19BFD3">
              <path
                d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"
                fill="#19BFD3"
              ></path>
            </g>
          </svg>
        </div>
      </div>
      <div className="news max-w-[1368px]  w-full lg:w-[87%] h-fit  flex flex-col gap-4 mx-auto lg:flex-row ">
        {products.news.map((item) => (
          <div
            key={item.id}
            className="imgbox w-[90%]   rounded-lg border border-[#e7e7e7]  mx-auto "
          >
            <a href="">
              <img src={item.image} className="rounded-t-lg" alt="" />
            </a>
            <div className="tex w-full h-[40px] lg:h-[70px] rounded-lg pr-4 pt-2 ">
              <span className=" text-[11px]   ">{item.tex}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Newsdigi;
