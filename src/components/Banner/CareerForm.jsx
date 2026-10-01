import React from "react";
import { Form } from "react-router-dom";

const CareerForm = () => {
  return (
    <>
      <div className="w-full lg:w-[50%]  h-fit flex flex-col justify-center items-center">
        <div className="text-white  flex flex-col justify-center items-start w-[87%] h-46 gap-4">
          <h1 className="text-[20px] md:text-4xl md:w-[95%] lg:text-3xl font-bold w-74">
            Get Free Career Counseling
          </h1>
          <p className="w-72 text-[12px] h-25 md:w-[83%] lg:w-[99%]  md:text-[15px]  ">
            Complete the form, and our career advisors will contact you shortly
            with information about courses, admissions, coworking spaces,
            study-abroad opportunities, scholarships, events, and career
            development.
          </p>
        </div>
        <Form className="w-full h-90 md:h-50 lg:h-fit lg:pt-3 flex flex-col gap-3 justify-center items-center">
          <div className="w-full h-full flex flex-col md:flex-row md:h-40 md:w-[90%] md:flex-wrap gap-3 justify-center items-center">
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
              type="email"
              name="email"
              id=""
              placeholder="example@email.com"
            />
            <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="text4"
              name="country"
              id=""
              placeholder="Country"
            />
            <input
              className="bg-[#F6F6F6] w-[90%] md:w-[48%] px-2 py-2 rounded-2xl placeholder:pl-5 placeholder:text-gray-600 placeholder:text-[14px] hover:placeholder:pl-15 transition-all duration-1000"
              type="text"
              name="city"
              placeholder="City"
            />
          </div>
          <div className="flex flex-col justify-center items-center self-center justify-self-center w-[90%] gap-3 ">
            <div className=" flex items-center self-center justify-self-center w-[96%] gap-3 ">
              <input
                className="bg-[#00C487] border-2 border-[#00C487]"
                type="checkbox"
                name="checknews"
                id=""
              />
              <h1 className="text-[16px] text-[#F6F6F6] ">
                Subscribe to our newsletter
              </h1>
            </div>
            <button className="py-3 px-6 font-bold text-white self-start justify-self-start rounded-full bg-linear-to-br from-blue-500/80 to-green-500/80 hover:scale-110">
              Apply Now
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default CareerForm;
