import React from "react";

const FeaturedServices = () => {
  let arr = [{}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center flex-col gap-3 mt-10">
        <h1 className="w-full text-2xl lg:text-4xl text-center ">Featured</h1>
        <div className="w-[80%] h-fit flex flex-wrap justify-center items-center  pt-10 pb-10 gap-3 bg-linear-to-br from-green-500/50 to-blue-500">
          {arr.map((ele, index) => {
            return (
              <>
                <div className="border border-white rounded-2xl w-[90%] md:w-[40%] lg:w-[20%]  gap-1 pt-3 pb-3 h-fit flex flex-col text-center justify-center items-center">
                  <img
                    src="https://career.edu.pk/assets/images/icon34.svg"
                    alt=""
                    className="w-auto h-auto"
                  />
                  <h1 className="text-white font-bold text-[20px]">
                    Free Wi-Fi Access
                  </h1>
                  <h2 className="text-white font-bold text-[12px]">
                    High-speed internet for seamless connectivity.
                  </h2>
                </div>
              </>
            );
          })}
        </div>
        {/* <div className="w-[80%] pl-10 pr-10 h-fit pt-10 pb-10 md:pt-0 md:pb-0 lg:h-100 gap-y-2  md:h-120  grid place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-2 bg-linear-to-br from-green-500/50 to-blue-500"> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default FeaturedServices;
