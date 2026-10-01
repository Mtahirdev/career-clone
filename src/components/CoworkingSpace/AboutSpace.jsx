import React from "react";

const AboutSpace = () => {
  return (
    <>
      <div className="w-full h-fit lg:w-[98%] text-center flex flex-col  justify-center items-center mt-5 lg:flex-row">
        <div className="w-[90%] lg:ml-4  h-fit flex flex-col gap-4 justify-center items-center text-center">
          <h1 className="text-[18px] text-black w-full lg:w-[70%] text-center md:text-2xl font-bold ">
            Where Ambition Meets Opportunity - Explore the spaces today!
          </h1>
          <h3 className="text-[15px] text-[#595959] w-full lg:w-[70%] text-center md:text-[18px]">
            Our modern office spaces provide freelancers, entrepreneurs, and
            teams with comfortable work areas. Explore today and find the
            perfect environment to enhance your productivity and achieve your
            goals! Experience the difference of a workspace designed to support
            your success and innovation.
          </h3>
        </div>
        <div className="w-[98%]  h-70 md:h-130 flex justify-center items-center  pt-5">
          <img
            className="w-full h-full"
            src="https://career.edu.pk/assets/images/img101.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default AboutSpace;
