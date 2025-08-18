const Box = ({items}) => {
    return (
        <>
        <div className="Box w-full max-w-[1620px] mx-auto  h-fit  pt-5 flex flex-wrap lg:flex lg:flex-nowrap items-center justify-center ">
          {items.map((item) =>(
            <div key={item.id}  className="w-[45%] h-[45%] lg:w-[24.7%] lg:h-[24.7%] xl:w-[21.5%]  xl:h-[21.5%]  p-2  " >
                <a href=""><img src={item.image} alt="" className="rounded-xl" /></a>
            </div>
          ))}
        </div>
        </>
    );
}
 
export default Box;