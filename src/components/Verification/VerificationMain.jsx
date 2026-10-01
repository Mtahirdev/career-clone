import React, { useState } from "react";

const VerificationMain = () => {
  let [i, seti] = useState(0);
  let [letter, setletter] = useState("Certificate");
  let arr = [
    "Certificate",
    "Diploma",
    "Internship Letter",
    "Experience Letter",
  ];

  let setIndex = (index) => {
    seti(index);
    setletter(arr[index]);
    localStorage.setItem("verificationIndex", index);
    localStorage.setItem("verificationLetter", letter);
  };

  return (
    <div className="w-full h-fit flex flex-col justify-center items-center mt-5">
      <div className="w-[90%] h-fit">
        <div className="w-full h-16 flex items-center gap-5 px-5 overflow-x-auto border rounded-2xl whitespace-nowrap justify-center">
          {arr.map((ele, index) => {
            let active = i == index;
            return (
              <button
                onClick={() => setIndex(index)}
                key={index}
                className={`shrink-0 px-5 py-2 rounded-xl hover:bg-gray-100 transition ${active == true ? "underline underline-offset-8" : ""}`}
              >
                {ele}
              </button>
            );
          })}
        </div>
      </div>
      {/* input div */}
      <div className="mt-4 flex flex-col justify-center items-center gap-4 ">
        <h1 className="text-2xl text-[#03c587] text-center font-bold">
          {letter} Verification Id
        </h1>
        <input type="text" className="px-10 py-3 rounded-2xl bg-gray-200" />
        <button className="bg-linear-to-br from-green-500 to-blue-500 px-10 py-4 text-white rounded-2xl">
          Verify Now
        </button>
      </div>
    </div>
  );
};

export default VerificationMain;
