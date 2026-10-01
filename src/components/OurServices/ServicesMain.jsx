import React from "react";

const ServicesMain = () => {
  let arr = [
    {
      name: "Career development",
      text: "Guidance, skills, networking, resume building, and interview readiness.",
      img: "https://career.edu.pk/assets/images/icon68.svg",
      classdiv:
        "w-[90%] md:w-full md:rounded-t-none md:rounded-tl-2xl md:border-r-0 h-68 flex flex-col justify-center items-center gap-5 border rounded-t-2xl border-b-0 ",
    },
    {
      name: "Career development",
      text: "Guidance, skills, networking, resume building, and interview readiness.",
      img: "https://career.edu.pk/assets/images/icon68.svg",
      classdiv:
        "w-[90%] md:w-full md:rounded-tr-2xl  h-68 flex flex-col justify-center items-center gap-5 border border-b-0 lg:rounded-tr-none lg:border-r-0 ",
    },
    {
      name: "Career development",
      text: "Guidance, skills, networking, resume building, and interview readiness.",
      img: "https://career.edu.pk/assets/images/icon68.svg",
      classdiv:
        "w-[90%] md:w-full md:border-r-0  h-68 flex flex-col justify-center items-center gap-5 border border-b-0 ",
    },
    {
      name: "Career development",
      text: "Guidance, skills, networking, resume building, and interview readiness.",
      img: "https://career.edu.pk/assets/images/icon68.svg",
      classdiv:
        "w-[90%] md:w-full  h-68 flex flex-col justify-center items-center gap-5 border border-b-0 lg:rounded-tr-2xl ",
    },
    {
      name: "Career development",
      text: "Guidance, skills, networking, resume building, and interview readiness.",
      img: "https://career.edu.pk/assets/images/icon68.svg",
      classdiv:
        "w-[90%] md:w-full  h-68 flex flex-col justify-center items-center gap-5 border border-b-0 lg:border-b lg:rounded-bl-2xl ",
    },
    {
      name: "Career development",
      text: "Guidance, skills, networking, resume building, and interview readiness.",
      img: "https://career.edu.pk/assets/images/icon68.svg",
      classdiv:
        "w-[90%] md:w-full md:border-l-0  h-68 flex flex-col justify-center items-center gap-5 border border-b-0 lg:border-b lg:border-r-0  ",
    },
    {
      name: "Career development",
      text: "Guidance, skills, networking, resume building, and interview readiness.",
      img: "https://career.edu.pk/assets/images/icon68.svg",
      classdiv:
        "w-[90%] md:w-full h-68 md:border-b md:border-r-0 md:rounded-bl-2xl flex flex-col justify-center items-center gap-5 border border-b-0 lg:rounded-bl-none  ",
    },
    {
      name: "Career development",
      text: "Guidance, skills, networking, resume building, and interview readiness.",
      img: "https://career.edu.pk/assets/images/icon68.svg",
      classdiv:
        "w-[90%] md:w-full h-68 md:rounded-bl-none flex flex-col justify-center items-center gap-5 border rounded-b-2xl ",
    },
  ];
  return (
    <>
      <div className="w-full h-fit flex flex-col mt-8 pb-5 pt-5 justify-center items-center gap-5 md:gap-10">
        <h1 className="text-2xl font-bold md:text-3xl">Our Services</h1>
        <div className="grid grid-col-1 place-items-center w-[90%] md:grid-cols-2 gap-x-0 lg:grid-cols-4   ">
          {arr.map((ele) => {
            return (
              <div
                className={`${ele.classdiv} hover:bg-linear-to-br hover:from-green-500 hover:to-blue-500 hover:text-white group`}
              >
                <img className="w-auto h-auto" src={ele.img} alt="" />
                <h1 className="text-[18px] text-center  w-full font-bold">
                  {ele.name}
                </h1>
                <p className="w-[70%] text-[#595959]">{ele.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ServicesMain;
