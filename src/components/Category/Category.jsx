import { useContext } from "react";
import { context } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid, Pagination, Navigation } from "swiper/modules";

const Category = () => {
  const products = useContext(context);
  return (
    <>
    <div className=" w-full h-[85px] mt-4 text-center  leading-[70px] text-[18px]  lg:text-[21px]  " >
      <h3>
        خرید بر اساس دسته‌بندی
      </h3>
    </div>
      <Swiper
        navigation={{
          nextEl: ".custom-next4",
          prevEl: ".custom-prev4",
        }}
        modules={[Grid, Pagination, Navigation]}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 3.3,
            slidesPerGroup: 5,
            grid: {
              rows: 3,
              fill: "row",
            },
          },
          703: {
            slidesPerView: 4.5,
            slidesPerGroup: 5,
            grid: {
              rows: 3,
              fill: "row",
            },
          },
          805: {
            slidesPerView: 5.5,
            slidesPerGroup: 5,
            grid: {
              rows: 3,
              fill: "row",
            },
          },
          1024: {
            slidesPerView: 7.5,
            slidesPerGroup: 18,
            grid: {
              rows: 2,
              fill: "row",
            },
          },
        }}
        className=" no-bullets  w-[95%] max-w-[1620px] mx-auto  lg:w-[97%]  xl:w-[85%]  "
      >
        {products.category.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col items-center w-fit   mx-auto  ">
              <a href="">
                <img
                  src={item.image}
                  alt=""
                  className="w-[100px] h-[100px] object-cover"
                />
              </a>
              <span className="w-full h-fit  text-center leading-4 text-[12px]  mt-3  m-7 ">
                {item.tex}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden lg:block relative max-w-[1760px] mx-auto ">
        <div className="custom-prev4 w-10 h-10 bg-[#fafafa] border border-solid  border-[#c9c9c9]  rounded-full flex items-center justify-center absolute bottom-28  lg:right-14 xl:right-36 -translate-y-1/2 z-10 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#757575"
            viewBox="0 0 24 24"
          >
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </div>
        <div className="custom-next4 w-10 h-10 bg-[#fafafa] border border-solid  border-[#c9c9c9] rounded-full flex items-center justify-center absolute bottom-28  lg:left-14 xl:left-36  -translate-y-1/2 z-10 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#757575"
            viewBox="0 0 24 24"
          >
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
          </svg>
        </div>
      </div>
    </>
  );
};
export default Category;
