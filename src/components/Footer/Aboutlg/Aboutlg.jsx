import { useContext, useState } from "react";
import { context } from "../../../App";
import Links from "../../../utilities/Link/Links";
const Aboutlg = () => {
  const products = useContext(context);
  const [email, setEmail] = useState("");
  const isEmailComplete = email.includes("@") && email.includes(".com");
  return (
    <>
      <div className="boxs w-full h-fit lg:flex lg:justify-center lg:gap-14 xl:gap-56   mt-8 hidden  ">
        {products.about.map((item) => (
          <div key={item.id}>
            <div className=" w-fit h-full   ">
              <span className=" text-[16px] ">{item.tex}</span>
              <div className="boxs mt-4 ">
                <ul>
                  {item.links.map((link, idx) => (
                    <li
                      key={idx}
                      className=" text-[14px] text-[#81858B] leading-8 "
                    >
                      <a href="">{link.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
        <div className="hamrah w-fit   ">
          <span className=" text-[16px] ">همراه ما باشید!</span>
          <div className=" w-full h-[50px]  mt-4 flex gap-8 items-center  ">
            <Links
              tex={
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 -0.5 25 25"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.5 5H9.5C7.29086 5 5.5 6.79086 5.5 9V15C5.5 17.2091 7.29086 19 9.5 19H15.5C17.7091 19 19.5 17.2091 19.5 15V9C19.5 6.79086 17.7091 5 15.5 5Z"
                    stroke="#a1a3a8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.5 15C10.8431 15 9.5 13.6569 9.5 12C9.5 10.3431 10.8431 9 12.5 9C14.1569 9 15.5 10.3431 15.5 12C15.5 12.7956 15.1839 13.5587 14.6213 14.1213C14.0587 14.6839 13.2956 15 12.5 15Z"
                    stroke="#a1a3a8"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <rect
                    x="15.5"
                    y="9"
                    width="2"
                    height="2"
                    rx="1"
                    transform="rotate(-90 15.5 9)"
                    fill="#a1a3a8"
                  ></rect>
                  <rect
                    x="16"
                    y="8.5"
                    width="1"
                    height="1"
                    rx="0.5"
                    transform="rotate(-90 16 8.5)"
                    stroke="#a1a3a8"
                    strokeLinecap="round"
                  ></rect>
                </svg>
              }
            />
            <Links
              tex={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="30"
                  height="30"
                  viewBox="0 -2 20 20"
                  version="1.1"
                >
                  <title>twitter [#154]</title>
                  <desc>Created with Sketch.</desc>
                  <defs></defs>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <g
                      id="Dribbble-Light-Preview"
                      transform="translate(-60.000000, -7521.000000)"
                      fill="#a1a3a8"
                    >
                      <g
                        id="icons"
                        transform="translate(56.000000, 160.000000)"
                      >
                        <path
                          d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                          id="twitter-[#154]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
              }
            />
            <Links
              tex={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#a1a3a8"
                  height="30"
                  width="30"
                  version="1.1"
                  id="Layer_1"
                  viewBox="-143 145 512 512"
                  xmlSpace="preserve"
                >
                  <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z   M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7  c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4  c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6  c35.5,0,63.3,23,63.3,72.4V508.1z"></path>
                </svg>
              }
            />
            <Links
              tex={
                <svg
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#a1a3a8"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  role="img"
                >
                  <path d="M12.001 1.594c-9.27-.003-13.913 11.203-7.36 17.758a10.403 10.403 0 0 0 17.76-7.355c0-5.744-4.655-10.401-10.4-10.403zM6.11 6.783c.501-2.598 3.893-3.294 5.376-1.103 1.483 2.19-.422 5.082-3.02 4.582A2.97 2.97 0 0 1 6.11 6.783zm4.322 8.988c-.504 2.597-3.897 3.288-5.377 1.096-1.48-2.192.427-5.08 3.025-4.579a2.97 2.97 0 0 1 2.352 3.483zm1.26-2.405c-1.152-.223-1.462-1.727-.491-2.387.97-.66 2.256.18 2.04 1.334a1.32 1.32 0 0 1-1.548 1.053zm6.198 3.838c-.501 2.598-3.893 3.293-5.376 1.103-1.484-2.191.421-5.082 3.02-4.583a2.97 2.97 0 0 1 2.356 3.48zm-1.967-5.502c-2.598-.501-3.293-3.896-1.102-5.38 2.19-1.483 5.081.422 4.582 3.02a2.97 2.97 0 0 1-3.48 2.36zM13.59 23.264l2.264.61a3.715 3.715 0 0 0 4.543-2.636l.64-2.402a11.383 11.383 0 0 1-7.448 4.428zm7.643-19.665L18.87 2.97a11.376 11.376 0 0 1 4.354 7.62l.65-2.459A3.715 3.715 0 0 0 21.231 3.6zM.672 13.809l-.541 2.04a3.715 3.715 0 0 0 2.636 4.543l2.107.562a11.38 11.38 0 0 1-4.203-7.145zM10.357.702 8.15.126a3.715 3.715 0 0 0-4.547 2.637l-.551 2.082A11.376 11.376 0 0 1 10.358.702z"></path>
                </svg>
              }
            />
          </div>
          <span className=" text-[16px] leading-[50px] ">
            با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید
          </span>
          <div className="flex gap-2 items-center mt-1 ">
            <input
              type="email"
              placeholder=" ایمیل شما "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border px-8 py-2 rounded mr-1 bg-[#f0f0f1] "
            />
            <button
              className={`px-3 py-2 text-white rounded ${
                isEmailComplete ? "bg-red-500" : "bg-[#b6b6b6]"
              }`}
            >
              ثبت
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutlg;
