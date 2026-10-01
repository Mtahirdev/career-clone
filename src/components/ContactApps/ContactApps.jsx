import React from "react";

const ContactApps = () => {
  let arr = [
    {
      img: "https://career.edu.pk/assets/images/icon20.svg",
      text: "Call Us Today",
      value: "03144444010",
    },
    {
      img: "https://career.edu.pk/assets/images/icon20.svg",
      text: "Call Us Today",
      value: "03144444010",
    },
    {
      img: "https://career.edu.pk/assets/images/icon20.svg",
      text: "Call Us Today",
      value: "03144444010",
    },
    {
      img: "https://career.edu.pk/assets/images/icon20.svg",
      text: "Call Us Today",
      value: "03144444010",
    },
    {
      img: "https://career.edu.pk/assets/images/icon20.svg",
      text: "Call Us Today",
      value: "03144444010",
    },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-fit mt-7 place-items-center gap-5 text-center">
        {arr.map((ele) => {
          return (
            <>
              <div className="w-[90%] flex gap-x-4 items-center">
                <div>
                  <img className="w-auto h-auto" src={ele.img} alt="" />
                </div>
                <div className="flex flex-col gap-2  ">
                  <h1 className="text-[18px] text-[#000000] w-full">
                    {ele.text}
                  </h1>
                  <h2 className="text-[16px] text-[#595959] w-full">
                    {ele.value}
                  </h2>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ContactApps;
