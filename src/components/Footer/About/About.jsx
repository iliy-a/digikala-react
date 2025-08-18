import { useState, useContext } from "react";
import { context } from "../../../App";

const About = () => {
  const products = useContext(context);
  const [openId, setOpenId] = useState(null); // فقط id آیتم باز شده رو نگه می‌داریم

  const toggleBox = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {products.about.map((item) => (
        <div className=" lg:hidden " key={item.id}>
          <div
            onClick={() => toggleBox(item.id)}
            className="box w-[95%] h-full  border-b-[#d4d4d4] border-b-[1px] mx-auto mt-1 relative cursor-pointer"
          >
            <span className="leading-[52px] mr-2 text-[13px]">{item.tex}</span>
            {openId !== item.id && (
              <div className="svg absolute left-4 top-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27">
                  <path d="M5.78 6.97L4.72 8.03l3.75 3.75a.75.75 0 001.06 0l3.75-3.75-1.06-1.06L9 10.19 5.78 6.97z"></path>
                </svg>
              </div>
            )}
            {openId === item.id && (
              <div className="svg2 absolute left-4 top-4">
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <defs>
                    <symbol
                      id="expandLess"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path>
                    </symbol>
                  </defs>
                  <g>
                    <path d="M7.707 14.707l-1.414-1.414 5-5a1 1 0 011.414 0l5 5-1.414 1.414L12 10.414l-4.293 4.293z"></path>
                  </g>
                </svg>
              </div>
            )}
          </div>

          {openId === item.id && (
            <div className="w-[95%]  mx-auto px-4 py-2 text-sm">
              <ul className="space-y-2  ">
                {item.links.map((link, idx) => (
                  <li key={idx} className=" text-[12px] text-[#424750] " >
                    <a href="">{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default About;
