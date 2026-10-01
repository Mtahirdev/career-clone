import React, { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";

const SuccessStoriesMain = () => {
  let journey = [{}, {}, {}, {}, {}];
  let arr = [
    { img: "https://career.edu.pk/success-story-image/3?v=2c2792daed75" },
    { img: "https://career.edu.pk/success-story-image/1?v=5eb321aa99cc" },
    { img: "https://career.edu.pk/success-story-image/5?v=075fa92e2021" },
    { img: "https://career.edu.pk/success-story-image/4?v=78ecde22ec32" },
  ];
  let [i, seti] = useState(0);
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center mt-10">
        <div className="flex border border-gray-400 w-[90%] h-fit rounded-2xl flex-col justify-center items-center gap-4 pt-4 pb-4 md:pl-2 md:pr-2 ">
          <div className="w-[96%] md:w-[99%] h-fit  flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-[30%] h-fit   flex justify-center">
              <img
                src={arr[i].img}
                className="w-[95%] rounded-2xl h-80"
                alt=""
              />
            </div>
            <div className="w-full md:w-[70%] h-fit  flex flex-col justify-center items-center text-center">
              <h1 className="text-2xl font-bold text-black">Abdullah Awan</h1>
              <h3 className="text-[#356EB5] font-bold ">
                Web Developer MERN Stack
              </h3>
              <div className="flex items-center gap-1">
                <span>
                  <IoLocationSharp />
                </span>
                <h1>Faisalabad</h1>
              </div>
              <div className="flex w-full h-fit flex-col md:flex-row gap-3 items-center justify-center pl-1 pr-1">
                <div className="bg-[#FFF3F3] w-[90%] md:w-[80%] h-fit pt-2 pb-2 rounded-2xl">
                  <h1 className="text-[#EA1111] text-start ml-2 font-bold">
                    Before
                  </h1>
                  <p className="text-[#595959] w-[90%] md:text-center md:w-[95%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, ipsum!
                  </p>
                </div>
                <div className="bg-[#FFF3F3] w-[90%] md:w-[80%] h-fit pt-2 pb-2 rounded-2xl mt-2">
                  <h1 className="text-[#03C587] text-start ml-2 font-bold">
                    Before
                  </h1>
                  <p className="text-[#595959] w-[90%] md:text-center md:w-[95%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eos, ipsum!
                  </p>
                </div>
              </div>
              <h1 className="text-2xl font-bold text-black">Journey</h1>
              <div className="flex w-full h-fit overflow-x-scroll  pl-3 pr-3 gap-5">
                {journey.map((ele) => {
                  return (
                    <>
                      <div className="w-30 h-30 flex flex-col justify-center items-center ">
                        <div className="bg-[#F4F4F4] h-12 w-12 rounded-full flex justify-center items-center">
                          <img
                            className="w-auto h-auto"
                            src="https://career.edu.pk/assets/images/icon90.svg"
                            alt=""
                          />
                        </div>
                        <h1 className="text-[10px]">Learn Php</h1>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-[96%] md:w-[96%] h-fit pt-5 pb-5 flex flex-row gap-5 overflow-x-scroll scrollbar-none pl-5 pr-5 ">
            {arr.map((ele, index) => {
              let active = i == index;
              return (
                <>
                  <div
                    onClick={() => seti(index)}
                    className={`w-[90%] md:w-[50%] lg:w-[40%] pt-3 pb-3 shrink-0 pl-3 bg-[#FFFFFF] h-30 text-center  flex flex-col justify-center items-center shadow-sm shadow-black ${active == true ? "border-blue-500 border" : ""}`}
                  >
                    <div className="w-full flex gap-2">
                      <img className="w-20 h-20" src={ele.img} alt="" />
                      <div className="flex flex-col gap-0.5">
                        <h1 className="text-[12px] font-bold text-black">
                          Abdullah Awan
                        </h1>
                        <p className="text-[#356EB5] text-[9px] font-bold ">
                          Web Developer MERN Stack
                        </p>
                        <div className="flex items-center gap-1">
                          <span>
                            <IoLocationSharp />
                          </span>
                          <h1>Faisalabad</h1>
                        </div>
                      </div>
                    </div>
                    <h1 className="text-[12px] w-[80%] font-bold text-gray-500">
                      web Developer at{" "}
                      <span className="text-green-500">Software House</span>
                    </h1>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStoriesMain;
