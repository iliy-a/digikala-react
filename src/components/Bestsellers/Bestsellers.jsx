import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Grid , Pagination , Navigation } from "swiper/modules";
const Bestsellers = ({items}) => {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        slidesPerGroup={1}
        grid={{
          rows: 3,
          fill: "row",
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next6",
          prevEl: ".custom-prev6",
        }}
        modules={[Grid, Pagination, Navigation]}
        className="mySwiper  no-bullets w-[96%] max-w-[1380px]  mx-auto lg:w-[85%] lg:border border-[#e7e7e7] mt-9  relative  rounded-2xl "
      >
        <div className="texet w-full h-[70px]  absolute top-0 flex justify-start  lg:justify-center items-center pt-3 gap-2 ">
          <svg
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.8202 1.17444L12.7809 2.37532C13.9186 3.7975 14.3379 5.20075 14.299 6.54704C14.2612 7.85605 13.7915 9.02304 13.3225 9.98619C13.1649 10.3098 12.9946 10.6349 12.8386 10.9327C12.7663 11.0708 12.697 11.203 12.6335 11.3265C12.4214 11.739 12.2593 12.0804 12.1563 12.3799C12.0528 12.6806 12.0336 12.8708 12.0468 12.991C12.0567 13.0817 12.0872 13.173 12.2071 13.2929C12.4054 13.4912 12.5517 13.5469 12.6404 13.5639C12.731 13.5814 12.8515 13.5757 13.0239 13.5049C13.4095 13.3463 13.8803 12.9334 14.3743 12.314C14.8488 11.719 15.2631 11.0384 15.5634 10.4938C15.712 10.2242 15.8295 9.99387 15.9091 9.83234C15.9488 9.75168 15.979 9.6885 15.9988 9.64651L16.0205 9.59999L16.0252 9.58959L16.0259 9.58824L16.026 9.5879L16.0261 9.58776L16.0261 9.58771L16.6117 8.29169L17.6332 9.28206C19.946 11.5244 20.6617 14.7623 19.1415 17.7019C17.8195 20.2583 15.1123 22 12 22C7.60499 22 4 18.5172 4 14.1697C4 11.8793 5.26687 10.2404 6.64671 8.62914C6.82673 8.41894 7.0107 8.20711 7.19757 7.99194C8.47882 6.5167 9.89649 4.88437 11.1122 2.5397L11.8202 1.17444ZM17.1269 11.7924C16.8148 12.3321 16.4089 12.9705 15.9379 13.561C15.3851 14.2542 14.6528 14.9975 13.7846 15.3546C13.33 15.5415 12.8109 15.6335 12.2624 15.5279C11.7119 15.4219 11.2196 15.1338 10.7929 14.7071C10.3617 14.2759 10.1196 13.7664 10.0586 13.2082C10.0008 12.6794 10.1126 12.1723 10.2651 11.729C10.4181 11.2846 10.6372 10.8353 10.8549 10.412C10.9327 10.2606 11.0095 10.114 11.0856 9.96886C11.2338 9.68618 11.3792 9.40866 11.5243 9.11064C11.9559 8.22433 12.2745 7.36712 12.2998 6.48929C12.3134 6.01847 12.2432 5.51449 12.0273 4.9728C10.9109 6.77097 9.71215 8.14915 8.69763 9.31555C8.51377 9.52693 8.33596 9.73135 8.16579 9.93006C6.7748 11.5543 6 12.6877 6 14.1697C6 17.3667 8.66302 20 12 20C14.3543 20 16.3818 18.6846 17.365 16.7832C18.2267 15.1169 18.1049 13.3127 17.1269 11.7924Z"
              fill="#f9a825"
            ></path>
          </svg>
          <h3 className="  text-[18px] lg:text-[21px]  ">پرفروش‌ترین کالاها</h3>
          <span className=" absolute left-6 text-[14px] cursor-pointer z-30 text-[#19BFD3] ">
            مشاهده همه
          </span>
        </div>
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!flex justify-center  !w-auto mt-20  "
          >
            <div className="w-[300px] h-[86px] flex  cursor-pointer ">
              <div className="img w-[86px] h-full  ">
                <img src={item.image} alt="" />
              </div>
              <span className=" w-fit h-full text-[26px] font-black text-[#19BFD3] leading-[86px]  ">
                {item.tex}
              </span>
              <p className="text-[12px] flex items-center mt-2 pr-3 h-[80px]  border-b border-[#e7e7e7]  ">
                {item.texet}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden lg:block relative max-w-[1560px] mx-auto ">
        <div className="custom-prev6 w-10 h-10 bg-[#fafafa] border border-solid  border-[#c9c9c9]  rounded-full flex items-center justify-center absolute  bottom-32 lg:right-12 xl:right-32 -translate-y-1/2 z-10 cursor-pointer">
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
        <div className="custom-next6 w-10 h-10 bg-[#fafafa] border border-solid  border-[#c9c9c9] rounded-full flex items-center justify-center absolute bottom-32  lg:left-12 xl:left-32  -translate-y-1/2 z-10 cursor-pointer">
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

export default Bestsellers;
