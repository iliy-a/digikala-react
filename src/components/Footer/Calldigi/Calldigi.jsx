
import { use } from "react";
const Calldigi = ({items}) => {

    return ( 
        <>
        {items.map((item)=>(
            <div key={item.id} className=" w-[95%] h-[64px]  mx-auto lg:hidden mt-3 border-b-[#d4d4d4] border-b-[1px] flex items-center relative " >
            <div className="svg w-[36px] h-[36px] rounded-full bg-teal-100 ">
                <a href="">
                    <img src={item.image} className=" rounded-full mx-auto  " alt="" />
                </a>
            </div>
            <div className="call-and-app w-[115px] text-[12px]  h-full leading-8   ">
                <p>
                    {item.tex}
                </p>
                <p className="text-[#81858B]" >
                    {item.texs}
                </p>
            </div>
            <span  className=" w-[60px] h-[32px] bg-[#F2F2F2] rounded-2xl absolute flex items-center justify-center text-[11px] left-5 " >
                {item.call}
            </span>
        </div>
        ))}
        
        </>
     );
}
 
export default Calldigi;