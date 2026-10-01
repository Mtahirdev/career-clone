import React from "react";
import { CiSearch } from "react-icons/ci";
import ProgramSlider from "./ProgramSlider";

const ProgramBanner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://career.edu.pk/assets/images/banner22.png')",
        }}
        className="w-full h-fit  bg-[url('https://career.edu.pk/assets/images/banner22.png')] bg-cover bg-no-repeat bg-center flex justify-center items-center flex-col gap-3 "
      >
        <div className="w-[90%] h-fit pb-10 flex justify-center items-center flex-col mt-2">
          <h1 className="text-2xl text-white font-bold text-center ">
            Build Skills. Earn Certifications. Advance Your Career.
          </h1>
          <h1 className="text-[15px] font-bold text-white text-center">
            Explore Industry-Focused Courses and Certifications to Build Skills
            and Shape Your Future.
          </h1>
          <div className="w-[80%] flex justify-center items-center h-20">
            <input
              type="text"
              className=" w-[70%] md:w-[50%] h-14 rounded-l-3xl bg-[#ffffff33]"
            />
            <button className=" w-[20%] md:w-[8%] h-14  rounded-r-3xl bg-linear-to-br from-green-500/50 to-blue-500/50 flex justify-center items-center text-2xl text-white">
              <CiSearch />
            </button>
          </div>
          {/* slider */}
          <ProgramSlider></ProgramSlider>
          {/* button */}
          <div className="w-[80%]   h-fit gap-5 items-center flex-col md:flex-row mt-10 text-center">
            <button className="bg-linear-to-br from-green-500/50 to-blue-500/50 py-2 px-6 rounded-3xl">
              Explore All Courses
            </button>
            <button className="bg-linear-to-br from-green-500/50 to-blue-500/50 py-2 px-6 rounded-3xl mt-4 md:ml-5">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* text */}
      <div className="bg-[#f9f9f9] w-full justify-center items-center flex flex-col  pt-10 pb-10">
        <h1 className="w-[90%] lg:w-[60%] text-center text-[#595959] lg:text-3xl text-2xl">
          Thousands of Learners trust Career Institute to gain practical skills,
          earn recognized certifications, and build successful careers.
        </h1>
        <div className="w-[70%] bg-linear-to-br from-green-500/50 to-blue-500/50 h-1 mt-4 "></div>
        <h1 className="w-[90%] lg:w-[60%] text-center text-black mt-5 lg:text-[25px] font-bold text-[20px]">
          Browse Course or Certification below to begin your success story.
        </h1>
      </div>
    </>
  );
};

export default ProgramBanner;
