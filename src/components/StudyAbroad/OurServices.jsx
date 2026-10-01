import React from "react";

const OurServices = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center items-center gap-5 mt-5">
        <div className="text-center text-2xl md:text-4xl text-[#000000] w-[90%] font-bold">
          <h1>Our Services</h1>
        </div>
        <div className="w-[90%] gap-3 grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="bg-linear-to-br w-[90%] h-50 rounded-2xl from-green-500 to-blue-500 text-white flex flex-col gap-3 justify-center items-center">
            <img
              className="w-auto h-auto"
              src="https://career.edu.pk/assets/images/icon44.svg"
              alt=""
            />
            <h1 className="text-white text-[20px] w-full text-center">
              ONE-ON-ONE COUNSELING
            </h1>
          </div>
          <div className="bg-linear-to-br w-[90%] h-50 rounded-2xl from-green-500 to-blue-500 text-white flex flex-col gap-3 justify-center items-center">
            <img
              className="w-auto h-auto"
              src="https://career.edu.pk/assets/images/icon44.svg"
              alt=""
            />
            <h1 className="text-white text-[20px] w-full text-center">
              ONE-ON-ONE COUNSELING
            </h1>
          </div>
          <div className="bg-linear-to-br w-[90%] h-50 rounded-2xl from-green-500 to-blue-500 text-white flex flex-col gap-3 justify-center items-center">
            <img
              className="w-auto h-auto"
              src="https://career.edu.pk/assets/images/icon44.svg"
              alt=""
            />
            <h1 className="text-white text-[20px] w-full text-center">
              ONE-ON-ONE COUNSELING
            </h1>
          </div>
          <div className="bg-linear-to-br w-[90%] h-50 rounded-2xl from-green-500 to-blue-500 text-white flex flex-col gap-3 justify-center items-center">
            <img
              className="w-auto h-auto"
              src="https://career.edu.pk/assets/images/icon44.svg"
              alt=""
            />
            <h1 className="text-white text-[20px] w-full text-center">
              ONE-ON-ONE COUNSELING
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
