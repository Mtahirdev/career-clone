import React from "react";
import { Form } from "react-router-dom";

const JoinNewsLetterMain = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center mt-5">
      <Form className="w-[90%] h-70 md:h-72 lg:h-50 lg:flex-row lg:justify-evenly lg:items-center flex flex-col rounded-2xl  bg-linear-to-br from-[#0274b3] to-[#01324d]">
        <div className="flex justify-center flex-col items-center gap-3 lg:w-[30%]">
          <h1 className="text-2xl font-bold text-white text-center">
            Join Our Newsletter
          </h1>
          <p className="text-white md:w-[50%] lg:w-[90%]  text-center">
            Never miss important updates, events, and career opportunities.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 pt-5 items-center lg:w-[70%]">
          <input
            className="bg-[#F6F6F6] w-[90%] md:w-[48%] lg:w-[35%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
            type="text"
            name="fullname"
            id=""
            placeholder="Full Name"
          />
          <input
            className="bg-[#F6F6F6] w-[90%] md:w-[48%] lg:w-[40%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
            type="text"
            name="course"
            id=""
            placeholder="Course"
          />
          <button className="py-3 px-6 font-bold text-white  rounded-full bg-linear-to-br from-blue-500/80 to-green-500/80">
            Join
          </button>
        </div>
      </Form>
    </div>
  );
};

export default JoinNewsLetterMain;
