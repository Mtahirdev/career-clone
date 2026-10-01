import React from "react";

const PSIExamAboutBanner = ({ toggle }) => {
  return (
    <>
      <div className="flex flex-col gap-y-0 w-full">
        {toggle == true ? (
          <div className="flex justify-center items-center text-center text-2xl md:3xl lg:text-4xl font-bold relative lg:top-16 top-12  text-[#000000] w-full">
            <h1>Why Choose Us</h1>
          </div>
        ) : (
          ""
        )}
        <div
          className={`w-full  h-fit ${toggle == true ? "mt-0 " : "bg-[#01718c] mt-9 "}  flex flex-col justify-center items-center gap-6 pb-10 pt-10 lg:flex-row lg:justify-evenly`}
        >
          <div className="w-[90%] lg:w-[60%] lg:pl-8 h-fit flex flex-col justify-center items-center gap-3 lg:gap-6 pt-5">
            {toggle == false ? (
              <button className=" self-start px-4 py-2 text-white border border-white rounded-2xl">
                About us
              </button>
            ) : (
              ""
            )}
            <h1
              className={` text-2xl md:self-start ${toggle == true ? "font-light" : "text-white font-bold "}`}
            >
              Take your certification exams at a secure, professional, and
              internationally recognized testing center.
            </h1>
            <p
              className={` lg:w-[70%] lg:self-start ${toggle == true ? "" : "text-white "}`}
            >
              Career Institute offers PSI testing services for international
              certifications and professional examinations, helping candidates
              achieve their academic and career goals with confidence.
            </p>
            <button className="bg-linear-to-br from-green-500 to-blue-500 px-5 py-2 rounded-2xl text-white self-start justify-self-start">
              Explore Now
            </button>
          </div>
          <div className="w-[90%] lg:w-[35%] h-full   self-center justify-self-center pt-18 lg:pr-6">
            <img
              className="w-full h-full "
              src="https://career.edu.pk/assets/images/img18.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PSIExamAboutBanner;
