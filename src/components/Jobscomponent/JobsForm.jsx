import React from "react";
import { Form } from "react-router-dom";

const BecomePartnerMain = ({ toggle }) => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://career.edu.pk/assets/images/banner03.png')",
        }}
        className="w-full h-fit bg-cover bg-center pb-10 mt-10 flex flex-col justify-center items-center "
      >
        <h1 className="flex justify-center items-center w-full text-3xl text-white font-bold pb-5 pt-5"></h1>

        <Form className="w-full md:w-[90%] lg:w-[70%] h-fit md:h-fit lg:h-fit lg:pt-3 flex flex-col gap-3 justify-center items-center">
          <div className="w-full h-full flex flex-col md:flex-row md:h-fit md:w-[90%] md:flex-wrap gap-3 justify-center items-center">
            <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="text"
              name="fullname"
              id=""
              placeholder="Full Name"
            />
            <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="text"
              name="course"
              id=""
              placeholder="Your LinkedIn Profile"
            />
            <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="number"
              name="contact"
              id=""
              placeholder="Contact"
            />
            <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="email"
              name="contact"
              id=""
              placeholder="Email"
            />
            <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="text"
              name="interest"
              id=""
              placeholder="College/University"
            />
            <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="text"
              name="interest"
              id=""
              placeholder="Qualification"
            />
            <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="text"
              name="contact"
              id=""
              placeholder="city"
            />
            <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="file"
              name="contact"
              id=""
              placeholder=""
            />
          </div>
          <div className="flex flex-col justify-center items-center self-center justify-self-center w-[90%] gap-3 ">
            <button className="hover:scale-110 py-3 px-6 mx-auto  font-bold text-white self-start justify-self-start rounded-full bg-linear-to-br from-blue-500/80 to-green-500/80">
              {toggle == true ? "Contact us" : "Apply Now"}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default BecomePartnerMain;
