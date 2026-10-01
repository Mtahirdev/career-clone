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
        <h1 className="flex justify-center items-center w-full text-2xl text-white font-bold pb-2 pt-5">
          Why Choose Us
        </h1>
        <h1 className="flex justify-center items-center w-full lg:text-3xl text-2xl text-center text-white font-bold pb-2">
          Flexible Coworking for Every Need
        </h1>
        <h1 className="flex justify-center items-center lg:w-140 w-70 text-center text-[15px] text-white pb-2">
          Enjoy a perfect workspace designed around you. From dedicated offices
          to dynamic shared spaces, our solutions offer the flexibility and
          value you need to succeed. We’re Here to Help You Achieve Your Goals!.
        </h1>
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
              placeholder="Course"
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
              type="text"
              name="interest"
              id=""
              placeholder="City"
            />
            {/* <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="text"
              name="interest"
              id=""
              placeholder="Business Interest"
            /> */}
            <select
              id="cars"
              name="cars"
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
            </select>
            <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="text"
              name="no of person"
              id=""
              placeholder="Number of person"
            />
          </div>
          <div className="flex flex-col justify-center items-center self-center justify-self-center w-[90%] gap-3 ">
            <button className="hover:scale-110 py-3 px-6 mx-auto  font-bold text-white self-start justify-self-start rounded-full bg-linear-to-br from-blue-500/80 to-green-500/80">
              {toggle == true ? "Contact us" : "Submit Request"}
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default BecomePartnerMain;
