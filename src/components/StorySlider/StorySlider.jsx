import { useContext } from "react";
import { context } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";

const StorySlider = () => {
  const products = useContext(context);

  return (
    <>
      <Swiper
        spaceBetween={14}
        slidesPerView="auto"
        freeMode={true}
        modules={[FreeMode, Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="mySwiper w-[90%] max-w-[1336px] mx-auto  lg:w-[95%] xl:w-[86%] h-[152px] mt-2 *:pt-3 border-t border-[#eeeeee] lg:border-none"
      >
        {products?.storyslider?.map((item) => (
          <SwiperSlide key={item.id} className="!w-[84px]">
            <div className="h-[84px] rounded-full overflow-hidden border-[3px] border-purple-500 p-[3px]">
              <a href="#">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </a>
            </div>
            <p className="text-[11px] mt-2 text-gray-700 ">
              درحد خودش خوبه
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className=" w-full  hidden lg:flex justify-center  relative max-w-[1560px] mx-auto  ">
        <div className="custom-next absolute bottom-16  lg:left-12 xl:left-32 w-[45px] h-[45px] bg-white border border-gray-300 rounded-full flex items-center justify-center shadow hover:bg-gray-100 cursor-pointer z-10">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <div className="custom-prev absolute bottom-16 lg:right-12 xl:right-32 w-[45px] h-[45px] bg-white border border-gray-300 rounded-full flex items-center justify-center shadow hover:bg-gray-100 cursor-pointer z-10">

          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default StorySlider;
