import React from "react";

const FeaturedSuccessStoriesCard = () => {
  return (
    <>
      <div className="w-[95%] h-100">
        <img
          src="https://career.edu.pk/success-story-image/3?v=2c2792daed75"
          alt=""
          className="w-full h-60 rounded-t-3xl"
        />
        <div className="flex flex-col gap-2 w-full bg-[#fff] mt-2 pl-4 rounded-2xl pb-2">
          <h1 className="text-[#000000] font-bold pt-3 ">Muhammad Ahmed</h1>
          {/* category */}
          <div className="flex gap-2  w-full items-center">
            <h1 className="text-[13px] font-bold">Course:</h1>
            <h1 className="text-[10px] pt-1 text-[#535353S]">
              AI Data Analytic
            </h1>
          </div>
          {/* duration */}
          <div className="flex gap-3 w-full items-center">
            <h1 className="text-[13px] font-bold">Type:</h1>
            <div className="flex w-full gap-2 items-center">
              <img
                src="https://career.edu.pk/assets/images/icon12.svg"
                alt=""
              />
              <h1 className="text-[10px]  text-[#535353S]">AI Data Analytic</h1>
            </div>
          </div>
          {/* Mode */}
          <div className="flex w-full gap-3 items-center">
            <h1 className="text-[13px] font-bold">Mode:</h1>
            <div className="flex w-full gap-2 items-center">
              <img
                src="https://career.edu.pk/assets/images/icon09.svg"
                alt=""
              />
              <h1 className="text-[10px] pt-1 text-[#535353S]">
                Software House
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedSuccessStoriesCard;
