import React from "react";

const ChooseUsBanner = () => {
  return (
    <>
      <div className="mt-5 lg:mt-2 flex flex-col justify-center h-[498px] items-center w-[95%] pb-5">
        <h1 className="text-3xl self-start ml-5 font-bold pb-4 lg:hidden">
          <span className="text-[#00a1b3]">Why</span> Choose us
        </h1>
        <img
          src="https://career.edu.pk/assets/images/img75.png"
          alt=""
          className="w-[95%] rounded-2xl"
        />
        <h1 className="self-start ml-4 mt-3 text-2xl text-[#000000] pb-3">
          About Career Institute
        </h1>
        <p className="w-[95%] text-center text-[#595959]">
          Since 2010, Career Institute has empowered more than 150,000 learners
          worldwide through industry-focused training, up-to-date curricula and
          certified instructors. Beyond education, we support freelancers,
          professionals and technology startups through modern coworking spaces
          designed for growth and collaboration. Advance your skills, career and
          business with Career Institute - where education meets innovation.
        </p>
        <button className="py-2 px-4 bg-linear-to-br text-white font-bold from-blue-500 to-green-500 rounded-3xl  mt-6 hover:scale-110">
          Read More
        </button>
      </div>
    </>
  );
};

export default ChooseUsBanner;
