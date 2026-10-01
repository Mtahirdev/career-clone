import React from "react";

const ProgramCategory = () => {
  let arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center text-center mt-10 ">
        <div className="w-[90%] h-fit flex-col flex justify-center items-center">
          <h1 className="text-2xl text-black md:text-3xl lg:text-4xl text-center">
            Explore By Category
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 place-items-center w-[80%] md:w-[70%]">
            {arr.map((ele) => {
              return (
                <>
                  <div className="w-[90%] mt-8 rounded-2xl aspect-square h-fit flex flex-col justify-center items-center bg-[#F7F5F7] shadow-sm shadow-black">
                    <img
                      src="https://career.edu.pk/assets/images/icon97.svg"
                      className="w-auto h-auto"
                      alt=""
                    />
                    <h1 className="text-[18px] font-bold">AI & Data Science</h1>
                    <p className="text-[#595959] text-center w-[80%]">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti...
                    </p>
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

export default ProgramCategory;
