import React, { act, useEffect, useState } from "react";
import { Form } from "react-router-dom";

const HowtoPayMain = () => {
  let [i, seti] = useState(0);
  let arr = [
    "https://career.edu.pk/assets/images/img36.png",
    "https://career.edu.pk/assets/images/img35.png",
    "https://career.edu.pk/assets/images/img43.png",
    "https://career.edu.pk/assets/images/img37.png",
  ];

  const [content, setcontent] = useState({
    name: "",
    title: "",
    number: "",
  });
  useEffect(() => {
    let newContent;

    if (i === 0) {
      newContent = {
        name: "HBL",
        title: "CAREER INSTITUTE (PRIVATE) LIMITED",
        number: "PK94HABB0002957901554603",
      };
    } else if (i === 1) {
      newContent = {
        name: "Meezan Bank",
        title: "CAREER INSTITUTE (PRIVATE) LIMITED",
        number: "PK10MEZN0004070106379883",
      };
    } else if (i === 2) {
      newContent = {
        name: "Jazz Cash",
        title: "Muhammad Adeel Javaid",
        number: "03145000083",
      };
    } else {
      newContent = {
        name: "EasyPaisa",
        title: "Muhammad Adeel Javaid",
        number: "03145000083",
      };
    }

    setcontent(newContent);
  }, []);

  const setIndex = (index) => {
    seti(index);

    let newContent;

    if (index === 0) {
      newContent = {
        name: "HBL",
        title: "CAREER INSTITUTE (PRIVATE) LIMITED",
        number: "PK94HABB0002957901554603",
      };
    } else if (index === 1) {
      newContent = {
        name: "Meezan Bank",
        title: "CAREER INSTITUTE (PRIVATE) LIMITED",
        number: "PK10MEZN0004070106379883",
      };
    } else if (index === 2) {
      newContent = {
        name: "Jazz Cash",
        title: "Muhammad Adeel Javaid",
        number: "03145000083",
      };
    } else {
      newContent = {
        name: "EasyPaisa",
        title: "Muhammad Adeel Javaid",
        number: "03145000083",
      };
    }

    setcontent(newContent);

    localStorage.setItem("payIndex", index);

    console.log(newContent);
  };
  return (
    <>
      <div className="w-full pb-6 pt-10 h-fit flex flex-col justify-center items-center mt-5 bg-linear-to-br from-[#03c38a] to-[#009db8]">
        <div className="w-[90%] h-fit">
          <div className="w-full h-30 flex items-center scrollbar-none gap-5 px-5 overflow-x-scroll  whitespace-nowrap md:justify-center bg-[#F9FAFB]">
            {arr.map((ele, index) => {
              let active = i == index;
              return (
                <div
                  className={`shrink-0 w-auto h-30 flex justify-center items-center     ${active == true ? "shadow-2xl shadow-gray-500" : ""}`}
                >
                  <img
                    onClick={() => setIndex(index)}
                    key={index}
                    src={ele}
                    className={`shrink-0 w-auto h-auto    `}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* second div */}
        <div className="bg-white w-[90%] flex justify-center h-100">
          <Form className="flex w-[60%] h-fit flex-col gap-5 mt-10 ">
            <label
              htmlFor="Bank Name"
              className="text-[18px] text-[#595959] md:text-2xl"
            >
              Bank Name
            </label>
            <input
              type="text"
              defaultValue={content.name}
              className="py-2 bg-gray-100 rounded-[5px] pl-5"
            />
            <label
              htmlFor="Account Title"
              className="text-[18px] text-[#595959] md:text-2xl"
            >
              Account Title
            </label>
            <input
              type="text"
              defaultValue={content.title}
              className="py-2 bg-gray-100 rounded-[5px] pl-5"
            />
            <label
              htmlFor="IBAN Number"
              className="text-[18px] text-[#595959] md:text-2xl"
            >
              IBAN Number
            </label>
            <input
              type="text"
              name=""
              id=""
              defaultValue={content.number}
              className="py-2 bg-gray-100 rounded-[5px] pl-5"
            />
          </Form>
        </div>
      </div>
    </>
  );
};

export default HowtoPayMain;
