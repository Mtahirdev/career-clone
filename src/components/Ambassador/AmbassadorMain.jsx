import React from "react";

const AboutSpace = () => {
  let arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <>
      <div className="w-full h-fit lg:w-[98%] text-center flex flex-col justify-center items-center mt-5 lg:flex-row">
        <div className="w-[90%] lg:ml-4 h-fit flex flex-col gap-4 justify-center items-center text-center">
          <h1 className="text-[18px] text-black w-full lg:w-[70%] text-center md:text-2xl font-bold">
            Empowering Future Leaders
          </h1>

          <h3 className="text-[15px] text-[#595959] w-full lg:w-[70%] text-center md:text-[18px]">
            At Career Institute, we believe in the power of community and the
            impact of shared experiences. Our Ambassador Program is designed to
            connect passionate individuals who embody our values and mission,
            helping us spread awareness about the opportunities we offer.
          </h3>
        </div>

        <div className="w-[98%] h-70 md:h-130 flex justify-center items-center pt-5">
          <img
            className="w-full h-full"
            src="http://career.edu.pk/assets/images/img33.png"
            alt=""
          />
        </div>
      </div>

      <div className=" w-full h-fit flex flex-col gap-5 justify-center lg:flex-row pt-5 pb-5">
        <div className="flex flex-col justify-center items-center w-full lg:w-[60%] gap-5">
          <div className="w-[90%]">
            <h1 className="w-full text-2xl lg:text-3xl font-bold text-[#000000] text-center">
              Perks & Amenities
            </h1>
          </div>

          <div className="grid grid-cols-2 gap-5 w-[90%] place-items-center md:grid-cols-3">
            {arr.map((ele, index) => {
              return (
                <div
                  key={index}
                  className="w-36 h-30 rounded-2xl shadow-2xl shadow-gray-300 border border-[#595959] flex flex-col justify-center items-center gap-3"
                >
                  <img
                    className="w-auto h-auto"
                    src="https://career.edu.pk/assets/images/icon61.svg"
                    alt=""
                  />

                  <h1 className="w-full text-center font-bold">
                    Stipends & Incentives
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSpace;
