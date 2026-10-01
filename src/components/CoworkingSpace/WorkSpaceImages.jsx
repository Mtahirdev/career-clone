import React from "react";

const WorkSpaceImages = () => {
  let arr = [
    {
      img: "https://career.edu.pk/assets/images/img92.webp",
      classname: "w-50 md:w-70 h-70 rounded-2xl",
    },
    {
      img: "https://career.edu.pk/assets/images/img92.webp",
      classname: "w-50 md:w-70 md:h-80 h-70 rounded-2xl",
    },
    {
      img: "https://career.edu.pk/assets/images/img92.webp",
      classname: "w-50 md:w-70 h-70 rounded-2xl",
    },
    {
      img: "https://career.edu.pk/assets/images/img92.webp",
      classname: "w-50 md:w-70 md:h-80 h-70 rounded-2xl",
    },
    {
      img: "https://career.edu.pk/assets/images/img92.webp",
      classname: "w-50 md:w-70 h-70 rounded-2xl",
    },
    {
      img: "https://career.edu.pk/assets/images/img92.webp",
      classname: "w-50 md:w-70 md:h-80 h-70 rounded-2xl",
    },
    {
      img: "https://career.edu.pk/assets/images/img92.webp",
      classname: "w-50 md:w-70 h-70 rounded-2xl",
    },
  ];
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center gap-4 items-center mt-10">
        <div className="w-[90%] h-fit flex flex-col justify-center items-center gap-1 text-center">
          <h1 className="text-green-400 font-bold w-full text-center text-[18px] ">
            Work Comfortably
          </h1>
          <h1 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl w-full text-center">
            Experience More Than Just a Space!
          </h1>
          <h1 className="text-[#595959] font-bold w-full text-center text-[18px]">
            All essentials provided for a productive workspace
          </h1>
        </div>
        <div className="w-[90%] h-80 overflow-hidden">
          <div className="flex w-max animate-infinite-scrollX">
            {/* First group */}
            <div className="flex shrink-0 items-center gap-5 pr-5">
              {arr.map((ele, index) => (
                <img
                  key={index}
                  src={ele.img}
                  className={ele.classname}
                  alt=""
                />
              ))}
            </div>

            {/* Exact duplicate */}
            <div className="flex shrink-0 items-center gap-5 pr-5">
              {arr.map((ele, index) => (
                <img
                  key={index}
                  src={ele.img}
                  className={ele.classname}
                  alt=""
                />
              ))}
            </div>
          </div>
        </div>
        {/* <button className="hover:scale-110 py-2 px-4 text-white font-bold bg-linear-to-br from-blue-500 to-green-500 rounded-3xl ml-20 mt-6 justify-self-center self-center">
          Read More
        </button> */}
      </div>
    </>
  );
};

export default WorkSpaceImages;
