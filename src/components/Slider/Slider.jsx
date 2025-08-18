import { useContext } from "react";
import { context } from "../../App";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Slider = () => {
  const products = useContext(context);
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1.10}
        centeredSlides={true}
        loop={true}
        breakpoints={{
            640:{
                slidesPerView: 1,
                centeredSlides: false,
            }
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,  
        }}
        navigation={{
          nextEl: ".custom-next2",
          prevEl: ".custom-prev2",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="relative mySwiper group max-w-[1680px] "
      >
        {products?.slider?.map((item) => (
          <SwiperSlide key={item.id}>
            <a href="#">
              <img
                src={item.image}
                alt=""
                className="w-full   h-[180px] lg:h-[300px] xl:h-[400px] lg:rounded-none mx-auto object-cover rounded-2xl"
              />
            </a>
          </SwiperSlide>
        ))}
        <div className=" relative max-w-[1680px] mx-auto " >
        <div className="absolute bottom-11 right-12 hidden group-hover:flex gap-2 z-10     ">
          <div className="custom-prev2 w-[40px] h-[40px] bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer">
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

          <div className="custom-next2 w-[40px] h-[40px] bg-white border border-gray-300 rounded-full flex items-center justify-center shadow-md hover:bg-gray-100 cursor-pointer">
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
        </div>
        </div>
      </Swiper>
    </>
  );
};

export default Slider;
