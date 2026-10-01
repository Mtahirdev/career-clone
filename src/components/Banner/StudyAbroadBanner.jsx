import React from "react";

const StudyAbroadBanner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://career.edu.pk/assets/images/banner11.png')",
        }}
        className="w-full h-40 md:h-70 lg:h-90 mt-6 bg-cover bg-center bg-no-repeat bg-red-50 flex flex-col justify-end"
      >
        <div className="w-40 flex-col h-20 md:w-90 md:h-30 lg:h-40 md:ml-9 lg:ml-12 ml-4 font-bold text-white text-2xl rounded-t-2xl bg-linear-to-br from-green-500/60 to-blue-500/60 flex justify-center items-center ">
          Study Abroad
          {/* <h1 className="text-[16px] font-light w-[70%]">
            We Ensure You Make the Right Decision at the Start of Your Career
          </h1> */}
        </div>
      </div>
    </>
  );
};

export default StudyAbroadBanner;
