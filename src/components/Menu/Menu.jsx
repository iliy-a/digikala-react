import Links from "../../utilities/Link/Links";
import MenuLg from "../MenuLg/MenuLg";

const Menu = () => {
  return (
    <>
      <nav>
        <menu>
          <div className="location w-full h-[24px]  px-7 flex gap-2 items-center    lg:hidden">
            <div className="icon w-[25px]  h-full flex items-center justify-center lg:h ">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p className="text-[12px]  leading-[24px] ">انتخاب استان و شهر</p>
            <svg
              className="w-4 h-4 font-black "
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
          <div className="menu w-full h-[52px]  bg-white z-50 fixed bottom-0 flex gap-[12%] pt-1 justify-center border-t-[1px] border-[#e8e8e8] lg:hidden ">
            <div className="w-fit h-fit text-[10px] text-center">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                fill="#282828"
                width="24"
                height="24"
              >
                <defs>
                  <symbol
                    id="home1Fill"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 11.586v6.586a3 3 0 01-3 3H7a3 3 0 01-3-3v-6.586l-1.293 1.293-1.414-1.415L9.879 2.88a3 3 0 014.242 0l8.586 8.585-1.414 1.415L20 11.586z"></path>
                  </symbol>
                </defs>
                <g>
                  <path d="M20 11.586v6.586a3 3 0 01-3 3H7a3 3 0 01-3-3v-6.586l-1.293 1.293-1.414-1.415L9.879 2.88a3 3 0 014.242 0l8.586 8.585-1.414 1.415L20 11.586z"></path>
                </g>
              </svg>
              <Links tex="خانه" />
            </div>
            <div className="w-fit h-fit text-[10px] text-[#a1a3a8] text-center flex flex-col items-center">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                fill="#a1a3a8"
                width="24"
                height="24"
              >
                <defs>
                  <symbol
                    id="categoryOutline"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1zM4 9V4h5v5H4zm17 4a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7zm-3.5-2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM20 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM6.5 22a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm6 2.5v-5h5v5h-5z"
                      clipRule="evenodd"
                    ></path>
                  </symbol>
                </defs>
                <g>
                  <path
                    fillRule="evenodd"
                    d="M10 2H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1zM4 9V4h5v5H4zm17 4a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7zm-3.5-2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM20 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM6.5 22a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm6 2.5v-5h5v5h-5z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
              <Links tex="دسته بندی" />
            </div>
            <div className="w-fit h-fit text-[10px] text-[#a1a3a8] text-center flex flex-col items-center">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                fill="#a1a3a8"
                width="24"
                height="24"
              >
                <defs>
                  <symbol
                    id="cartOff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z"
                      clipRule="evenodd"
                    ></path>
                  </symbol>
                </defs>
                <g>
                  <path
                    fillRule="evenodd"
                    d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
              <Links tex="سبدخرید" />
            </div>
            <div className="w-fit h-fit text-[10px] text-[#a1a3a8] text-center flex flex-col items-center">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 3.65629C2 2.15127 3.59967 1.18549 4.93149 1.88645L20.7844 10.2301C22.2091 10.9799 22.2091 13.0199 20.7844 13.7698L4.9315 22.1134C3.59968 22.8144 2 21.8486 2 20.3436V3.65629ZM19.8529 11.9999L16.2682 10.1132L14.2243 11.9999L16.2682 13.8866L19.8529 11.9999ZM14.3903 14.875L12.75 13.3608L6.75782 18.8921L14.3903 14.875ZM12.75 10.639L14.3903 9.12488L6.75782 5.10777L12.75 10.639ZM4 5.28391L11.2757 11.9999L4 18.7159V5.28391Z"
                  fill="#a1a3a8"
                ></path>
              </svg>
              <Links tex="مگنت" />
            </div>
            <div className="w-fit h-fit text-[10px] text-[#a1a3a8] text-center flex flex-col items-center">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                fill="#a1a3a8"
                width="24"
                height="24"
              >
                <defs>
                  <symbol
                    id="profileOff"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2a5 5 0 015 5v1A5 5 0 017 8V7a5 5 0 015-5zm9.996 18.908C21.572 16.318 18.096 14 12 14c-6.095 0-9.572 2.318-9.996 6.908A1 1 0 003 22h18a1 1 0 00.996-1.092zM4.188 20c.728-2.677 3.231-4 7.812-4 4.58 0 7.084 1.323 7.812 4H4.188zM9 7a3 3 0 116 0v1a3 3 0 01-6 0V7z"
                      clipRule="evenodd"
                    ></path>
                  </symbol>
                </defs>
                <g>
                  <path
                    fillRule="evenodd"
                    d="M12 2a5 5 0 015 5v1A5 5 0 017 8V7a5 5 0 015-5zm9.996 18.908C21.572 16.318 18.096 14 12 14c-6.095 0-9.572 2.318-9.996 6.908A1 1 0 003 22h18a1 1 0 00.996-1.092zM4.188 20c.728-2.677 3.231-4 7.812-4 4.58 0 7.084 1.323 7.812 4H4.188zM9 7a3 3 0 116 0v1a3 3 0 01-6 0V7z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
              <Links tex="دیجی کالای من" />
            </div>
          </div>
          <MenuLg />
        </menu>
      </nav>
    </>
  );
};

export default Menu;
