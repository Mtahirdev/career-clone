import React from "react";

const NewsBoxCard = () => {
  return (
    <>
      <div className="w-[90%] h-28 bg-[#FFFFFF] rounded-2xl flex  items-center">
        <div className="w-[2%] h-[90%] rounded-2xl bg-black  "></div>
        <div className="z-20 flex flex-col gap-2 ">
          <h1 className="text-[15px] w-[99%] pl-6 text-[#000000]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo.
          </h1>
          <h1 className="flex pl-6 gap-4 items-center">
            <span>
              <img
                src="https://career.edu.pk/assets/images/icon05.svg"
                alt=""
              />
            </span>
            <span className="text-[#009db8]">20-08-2026</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default NewsBoxCard;
