const Login = () => {
  return (
    <>
      <div className=" w-[100vw] h-[100vh] flex justify-center items-center ">
        <div className="login w-[400px] h-fit   lg:border py-4 rounded-md ">
          <div className="img w-full h-[100px] flex justify-center items-center relative ">
            <img
              src="https://www.digikala.com/brand/full-vertical.svg"
              className="w-[100px] h-[70px] "
              alt=""
            />
            <div className="svg w-[50px] h-[50px] absolute right-3 flex justify-center items-center ">
              <svg
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
              >
                <defs>
                  <symbol
                    id="arrowRight"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 19.707l-1.414-1.414L16.586 13H4v-2h12.586l-5.293-5.293 1.414-1.414 7 7a1 1 0 010 1.414l-7 7z"
                      clipRule="evenodd"
                    ></path>
                  </symbol>
                </defs>
                <g>
                  <path
                    fillRule="evenodd"
                    d="M12.707 19.707l-1.414-1.414L16.586 13H4v-2h12.586l-5.293-5.293 1.414-1.414 7 7a1 1 0 010 1.414l-7 7z"
                    clipRule="evenodd"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
          <div className="tex w-full h-[150px]  ">
            <h1 className=" text-[19px]  p-5 ">ورود | ثبت‌نام</h1>
            <p className=" text-[12px] px-4 py-1 text-[#3F4064] ">سلام!</p>
            <p className=" text-[12px] px-4 py-1 text-[#3F4064] ">
              لطفا شماره موبایل یا ایمیل خود را وارد کنید
            </p>
          </div>
          <div className="form w-full h-[70px] flex flex-wrap justify-center items-center relative  ">
            <input
              type="email"
              className=" w-[80%] h-[48px] rounded-lg border-[1px] border-red-500  focus:border-red-500 focus:border-[1px] focus:outline-none caret-[#04f3ef] px-4 "
            />
            <span className=" text-[12px] text-[#B2001A] absolute right-9 top-[64px]  " >لطفا این قسمت را خالی نگذارید</span>
          </div>
          <div className="go w-[80%] h-[45px] bg-[#ef4056] mx-auto mt-10 rounded-lg flex justify-center items-center text-white ">
            <span>
              ورود
            </span>
          </div>
          <p className=" text-[11px] m-4 text-center " >
            ورود شما به معنای پذیرش <span className=" text-[#008EB2] " >شرایط دیجی‌کالا</span> و <span className=" text-[#008EB2] " >قوانین حریم‌خصوصی</span> است
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
