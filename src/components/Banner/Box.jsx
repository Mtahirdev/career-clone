import React from "react";

const Box = () => {
  return (
    <>
      <div className="w-[90%] h-60 md:h-80 lg:h-40 pt-5 flex flex-wrap items-center justify-center shadow-2xl shadow-black-50/95 lg:flex-row lg:flex-nowrap ">
        <div className="w-[50%] h-[50%] flex justify-center items-center flex-col gap-1.5 border-r border-b lg:border-0 border-white">
          <img src="https://career.edu.pk/assets/images/icon01.svg" alt="" />
          <h2 className="text-white text-[22px] font-bold">150,000+</h2>
          <h2 className=" text-white text-[15px]">Alumni</h2>
        </div>
        <div className="w-[50%] h-[50%] flex justify-center items-center flex-col gap-1.5 border-b lg:border-0 border-white">
          <img src="https://career.edu.pk/assets/images/icon01.svg" alt="" />
          <h2 className="text-white text-[22px] font-bold">150,000+</h2>
          <h2 className=" text-white text-[15px]">Alumni</h2>
        </div>
        <div className="w-[50%] h-[50%] flex justify-center items-center flex-col gap-1.5 border-r lg:border-0 border-white">
          <img src="https://career.edu.pk/assets/images/icon01.svg" alt="" />
          <h2 className="text-white text-[22px] font-bold">150,000+</h2>
          <h2 className=" text-white text-[15px]">Alumni</h2>
        </div>
        <div className="w-[50%] h-[50%] flex justify-center items-center flex-col gap-1.5">
          <img src="https://career.edu.pk/assets/images/icon01.svg" alt="" />
          <h2 className="text-white text-[22px] font-bold">150,000+</h2>
          <h2 className=" text-white text-[15px]">Alumni</h2>
        </div>
      </div>
    </>
  );
};

export default Box;
