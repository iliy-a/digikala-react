import { useContext } from "react";
import { context } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

const Item = () => {
  const products = useContext(context);

  return (
    <>
      <Swiper
        modules={[Pagination]}
        className="mySwiper w-[95%] max-w-[1368px] mx-auto  lg:w-[85%] h-fit mt-8  "
        breakpoints={{
          1280: {
            slidesPerView: 10,
            slidesPerGroup: 10,
            pagination: false,
          },
          1024: {
            slidesPerView: 10,
            slidesPerGroup: 10,
            pagination: false,
          },
          768: {
            slidesPerView: 6.5,
            slidesPerGroup: 10,
            pagination: false,
          },
          0: {
            slidesPerView: 6.5,
            slidesPerGroup: 10,
            pagination: false,
          },
        }}
      >
        {products.item.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center justify-center">
              <a href="">
                <img src={item.image} alt="" className="w-[52px] h-[52px]" />
              </a>
              <span className="text-[11px] mt-2 cursor-pointer text-center whitespace-pre-line leading-4 w-[54px]">
                {item.tex}
              </span>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide className="text-[11px]  pr-4 " >
          <div className="w-[52px] h-[52px] bg-[#f0f0f1] rounded-full  ">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#9b9b9b"
              className="absolute top-3.5 right-5 "
            >
              <defs>
                <symbol
                  id="moreHoriz"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-4-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                    clipRule="evenodd"
                  ></path>
                </symbol>
              </defs>
              <g>
                <path
                  fillRule="evenodd"
                  d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-4-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
          </div>
          <div className="w-full h-full text-center  relative ">
            <a href="" className="absolute right-3 top-2 " >
                بیشتر
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Item;
