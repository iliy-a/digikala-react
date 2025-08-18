import { useContext } from "react";
import { context } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const FavoritBrand = () => {
  const products = useContext(context);
  return (
    <>
      <Swiper
        slidesPerView="auto"
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next5",
          prevEl: ".custom-prev5",
        }}
        modules={[Pagination, Navigation]}
        className=" no-bullets mySwiper  w-full max-w-[1380px] mx-auto  lg:w-[96%] xl:w-[85.4%] lg:border  h-fit lg:h-[235px]  flex justify-center items-center mt-9 lg:rounded-2xl "
      >
        {products.brand.map((item) => (
          <SwiperSlide
            key={item.id}
            className=" !w-[102px] !h-[70px] lg:!w-[142px] lg:!h-[118px] lg:mt-20 border-l-[1px] border-[#e9e9e9] "
          >
            <a href="">
              <img
                src={item.image}
                className=" w-[70px] h-[70px] lg:w-[110px] lg:h-[110px] object-contain mx-auto "
                alt=""
              />
            </a>
          </SwiperSlide>
        ))}
        <div className="tex w-full h-[60px]  absolute top-0  justify-center items-end gap-2 hidden lg:flex ">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            fill="#f9bc00"
          >
            <defs>
              <symbol
                id="topBrands"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 25 24"
              >
                <path d="M7.278 6.192L4.5 3.414 5.914 2l2.778 2.778-1.414 1.414z"></path>
                <path
                  fillRule="evenodd"
                  d="M14.497 4.675l1.028 3.162h3.325c2.034 0 2.88 2.603 1.234 3.799l-2.69 1.954 1.028 3.163c.628 1.934-1.586 3.543-3.232 2.347l-2.69-1.954L9.81 19.1c-1.646 1.196-3.86-.413-3.232-2.348l1.028-3.162-2.69-1.954c-1.646-1.196-.8-3.799 1.234-3.8h3.325l1.028-3.161c.629-1.935 3.365-1.935 3.994 0zm-3.641 5.162a.1.1 0 00.095-.07l1.454-4.474a.1.1 0 01.19 0l1.454 4.475a.1.1 0 00.095.069h4.706a.1.1 0 01.058.18l-3.806 2.767a.1.1 0 00-.036.111l1.453 4.476a.1.1 0 01-.153.111l-3.807-2.765a.1.1 0 00-.118 0l-3.807 2.765a.1.1 0 01-.153-.111l1.453-4.476a.1.1 0 00-.036-.111l-3.806-2.766a.1.1 0 01.058-.181h4.706z"
                  clipRule="evenodd"
                ></path>
                <path d="M19.167 15.244l3.333 2.222 1.11-1.664-3.334-2.223-1.11 1.665zM5.833 15.244L2.5 17.466l-1.11-1.664 3.334-2.223 1.11 1.665zM11.5 20v3h2v-3h-2zM18.192 6.192l2.778-2.778L19.556 2l-2.778 2.778 1.414 1.414z"></path>
              </symbol>
            </defs>
            <g>
              <path d="M7.278 6.192L4.5 3.414 5.914 2l2.778 2.778-1.414 1.414z"></path>
              <path
                fillRule="evenodd"
                d="M14.497 4.675l1.028 3.162h3.325c2.034 0 2.88 2.603 1.234 3.799l-2.69 1.954 1.028 3.163c.628 1.934-1.586 3.543-3.232 2.347l-2.69-1.954L9.81 19.1c-1.646 1.196-3.86-.413-3.232-2.348l1.028-3.162-2.69-1.954c-1.646-1.196-.8-3.799 1.234-3.8h3.325l1.028-3.161c.629-1.935 3.365-1.935 3.994 0zm-3.641 5.162a.1.1 0 00.095-.07l1.454-4.474a.1.1 0 01.19 0l1.454 4.475a.1.1 0 00.095.069h4.706a.1.1 0 01.058.18l-3.806 2.767a.1.1 0 00-.036.111l1.453 4.476a.1.1 0 01-.153.111l-3.807-2.765a.1.1 0 00-.118 0l-3.807 2.765a.1.1 0 01-.153-.111l1.453-4.476a.1.1 0 00-.036-.111l-3.806-2.766a.1.1 0 01.058-.181h4.706z"
                clipRule="evenodd"
              ></path>
              <path d="M19.167 15.244l3.333 2.222 1.11-1.664-3.334-2.223-1.11 1.665zM5.833 15.244L2.5 17.466l-1.11-1.664 3.334-2.223 1.11 1.665zM11.5 20v3h2v-3h-2zM18.192 6.192l2.778-2.778L19.556 2l-2.778 2.778 1.414 1.414z"></path>
            </g>
          </svg>
          <p className="text-[21px] ">محبوب‌ترین برندها</p>
        </div>
      </Swiper>
      <div className="hidden lg:block max-w-[1560px] mx-auto relative ">
        <div className="custom-prev5 w-10 h-10 bg-[#fafafa] border border-solid  border-[#c9c9c9]  rounded-full flex items-center justify-center absolute bottom-16  lg:right-12 xl:right-32 -translate-y-1/2 z-10 cursor-pointer">
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
        <div className="custom-next5 w-10 h-10 bg-[#fafafa] border border-solid  border-[#c9c9c9] rounded-full flex items-center justify-center absolute bottom-16  lg:left-12 xl:left-32  -translate-y-1/2 z-10 cursor-pointer">
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

export default FavoritBrand;
