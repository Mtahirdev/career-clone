import React from "react";

const ContactBanner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://career.edu.pk/assets/images/banner13.png')",
        }}
        className="w-full h-40 md:h-70 lg:h-90 mt-6 bg-cover bg-center bg-no-repeat bg-red-50 flex flex-col justify-end"
      >
        <div className="w-40 h-20 md:w-90 md:h-30 lg:h-40 md:ml-9 lg:ml-12 ml-4 font-bold text-white text-2xl rounded-t-2xl bg-linear-to-br from-green-500/60 to-blue-500/60 flex justify-center items-center ">
          contact
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-fit flex-col text-center text-[20px] mt-4 ">
        <h1 className="w-[90%] text-[#000000] md:text-2xl lg:w-[70%] lg:text-3xl">
          Have questions about our courses, admissions, certifications, testing
          services, coworking spaces, study abroad, or campuses?
        </h1>
        <span className="w-[90%] text-[#595959] text-[18px] md:text-[21px] lg:w-[70%] lg:text-3xl">
          Connect with our team via WhatsApp, phone, email, Webex, Google Meet,
          or Microsoft Teams at your convenience.
        </span>
        <div className="bg-linear-to-br from-green-500 to-blue-500 h-1 mt-4 md:mt-9 lg:w-[50%] w-[70%]"></div>
      </div>
    </>
  );
};

export default ContactBanner;
