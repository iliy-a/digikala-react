const BanerBox = ({ items }) => {
  return (
    <>
      <div className="baner w-full max-w-[1620px] mx-auto  h-fit flex flex-col gap-4  items-center justify-center  lg:flex-row mt-14 ">
        {items.map((item) => (
          <div key={item.id} className="img w-[95%]  h-[50%] lg:w-[47%] xl:w-[42%] ">
           <a href="">
             <img src={item.image} className=" rounded-2xl mx-auto " alt="" />
           </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default BanerBox;
