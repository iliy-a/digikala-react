import { useContext } from "react";
import { context } from "../../App";
const Products = ({items}) => {
  const products = useContext(context);
  return (
    <>
      <section className=" max-w-[1380px] mx-auto lg:flex mt-8 lg:border lg:w-[85%] lg:border-[#e4e4e4] lg:mx-auto lg:rounded-2xl relative ">
        <div className="absolute hidden lg:block top-0 bottom-0 left-1/2 w-[1px] bg-[#e4e4e4] z-10" />
        <div className="absolute hidden lg:block top-0 bottom-0  left-1/4 w-[1px] bg-[#e4e4e4] z-10" />
        <div className="absolute hidden lg:block top-0 bottom-0  right-1/4 w-[1px] bg-[#e4e4e4] z-10" />
        {items.map((item) => (
          <div key={item.id} className="w-full h-fit ">
            <div className="tex w-full h-10 lg:h-fit lg:p-5  pr-5 ">
              <h4 className="text-[14px] "> {item.tex} </h4>
              <p className=" text-[12px] text-[#81858b] ">بر اساس سلیقه شما</p>
            </div>
            <div className="img w-[86.5%] h-[100%]  grid grid-cols-2 gap-3 mx-auto relative ">
              <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#e4e4e4] z-10" />
              <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-[#e4e4e4] z-10" />
              {item.img?.map((imgItem) => (
                <img
                  key={imgItem.id}
                  className=" w-full h-full"
                  src={imgItem.image}
                  alt=""
                />
              ))}
            </div>
            <div className="see w-full h-[40px]  flex justify-center items-center ">
              <span className=" text-[12px] text-[#19BFD3] ">مشاهده</span>
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                fill="#19BFD3"
                width="15"
                height="15"
                viewBox="-128 0 512 512"
              >
                <path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path>
              </svg>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Products;
