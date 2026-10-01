import React from "react";

const StudyProgram = () => {
  let arr = [{}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="bg-[#f6f9fe] w-full h-fit flex flex-col gap-5 justify-center lg:flex-row  pt-5">
        <div className="flex flex-col justify-center items-center w-full lg:w-[40%] gap-5">
          <div className="w-[90%]">
            <h1 className="w-full text-2xl font-bold text-[#000000]">
              <span className="underline underline-offset-[12px] decoration-blue-500 decoration-3 ">
                Study{" "}
              </span>
              Program
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-5 w-[90%] place-items-center md:grid-cols-3">
            {arr.map((ele) => {
              return (
                <div className="w-26 h-26 rounded-2xl shadow-2xl shadow-gray-100 border border-[#595959] flex flex-col justify-center items-center gap-3">
                  <img
                    className="w-auto h-auto"
                    src="https://career.edu.pk/assets/images/icon80.svg"
                    alt=""
                  />
                  <h1 className="w-full text-center font-bold">
                    Bachelor's Degree
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
        {/* second div */}
        <div className="bg-[#01324d] rounded-t-2xl lg:rounded-t-none lg:rounded-tl-4xl text-white text-center gap-4 flex justify-center flex-col lg:flex-row items-center lg:w-[60%]">
          <div className="gap-3 flex flex-col">
            <h1 className="w-[85%] text-2xl font-bold text-center">
              Ready to Start Your Study Abroad Journey?
            </h1>
            <h2 className="w-[70%] text-[16px] ">
              Let Our Expert Guide You Every Step of the Way
            </h2>
            <div className="w-[95%] flex justify-evenly">
              <button className="w-[40%] px-3 py-1 rounded-2xl bg-white text-black text-[12px] md:py-3">
                Book Free Consultation
              </button>
              <button className="px-3 py-1 rounded-2xl bg-[#00A9C7] text-[12px] md:py-3">
                Apply Now
              </button>
            </div>
          </div>
          <img
            className="w-auto h-auto text-center"
            src="https://career.edu.pk/assets/images/img51.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default StudyProgram;
