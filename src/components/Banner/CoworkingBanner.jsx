import React from "react";

const CoworkingBanner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://career.edu.pk/assets/images/banner09.png')",
      }}
      className="w-full h-70 pb-5 md:h-70 lg:h-90 mt-6 bg-cover bg-center bg-no-repeat bg-red-50 flex flex-col justify-end"
    >
      <div className="w-[90%] mx-auto flex h-fit flex-col items-center justify-center gap-2 text-center">
        <h3 className="w-full text-center text-[16px] text-white md:text-[18px]">
          Our modern spaces are simply stunning
        </h3>

        <h1 className="w-full text-center text-2xl text-white md:text-3xl">
          Coworking Space for Success
        </h1>

        <div className="flex w-[70%] justify-evenly gap-7 pt-5 lg:w-[30%]">
          <button className="rounded-2xl bg-linear-to-br from-green-500 to-blue-500 px-5 py-2 text-[20px]">
            Get Quote
          </button>

          <button className="rounded-2xl bg-linear-to-br from-[#F0F7F5] to-[#019FB6] px-5 py-2 text-[20px] text-black">
            Watch Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoworkingBanner;
