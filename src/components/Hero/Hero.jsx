import React from "react";

const Hero = () => {
  return (
    <div className="relative w-[95%] lg:w-[85%] h-fit pb-10 rounded-2xl overflow-hidden bg-linear-to-br from-blue-500/90 to-green-500/90">
      <div className="w-full h-fit justify-between  flex items-start">
        <img
          className="w-40 h-40 md:w-50 md:h-50"
          src="https://career.edu.pk/assets/images/icon07.png"
          alt=""
        />
        <img
          className="w-40 h-40 md:w-50 md:h-50"
          src="https://career.edu.pk/assets/images/icon06.png"
          alt=""
        />
      </div>
      <h1 className="w-full text-2xl md:text-4xl text-center text-white font-bold z-10 absolute top-14">
        Guiding Vision from Our Directors
      </h1>
      <div className="w-full h-fit justify-center flex flex-col gap-5 md:flex-row  ">
        {/* first person */}
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Director image */}
          <img
            src="https://career.edu.pk/assets/images/img02.png"
            alt=""
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-50 md:h-50 rounded-full object-cover"
          />

          {/* Name */}
          <h1 className="py-2 px-5 rounded-[10px] border-2 font-bold border-[#ffffff49] bg-[#d9d9d925] text-white text-center">
            Adeel Javaid - Director
          </h1>

          {/* Vision */}
          <div className="w-[96%] flex justify-center ">
            <p className="text-white text-center max-w-2xl">
              <img
                src="https://career.edu.pk/assets/images/icon08.png"
                alt=""
                className="inline-block w-5 h-5 align-top mr-2 -translate-y-1"
              />
              <b>Our Vision</b> is to transform education into meaningful
              careers. Since 2010, Career Institute has delivered practical,
              industry-focused training, empowering learners with relevant
              skills, confidence and direction to succeed in a rapidly evolving
              global workforce.
              <img
                src="https://career.edu.pk/assets/images/icon08.png"
                alt=""
                className="inline-block w-5 h-5 align-bottom ml-2 rotate-180 translate-y-1"
              />
            </p>
          </div>
        </div>
        {/* second person */}
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Director image */}
          <img
            src="https://career.edu.pk/assets/images/img104.png"
            alt=""
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-50 md:h-50 rounded-full object-cover"
          />

          {/* Name */}
          <h1 className="py-2 px-5 rounded-[10px] border-2 font-bold border-[#ffffff49] bg-[#d9d9d925] text-white text-center">
            Adeel Javaid - Director
          </h1>

          {/* Vision */}
          <div className="w-[96%] flex justify-center">
            <p className="text-white text-center max-w-2xl">
              <img
                src="https://career.edu.pk/assets/images/icon08.png"
                alt=""
                className="inline-block w-5 h-5 align-top mr-2 -translate-y-1"
              />
              <b>Our Vision</b> is to transform education into meaningful
              careers. Since 2010, Career Institute has delivered practical,
              industry-focused training, empowering learners with relevant
              skills, confidence and direction to succeed in a rapidly evolving
              global workforce.
              <img
                src="https://career.edu.pk/assets/images/icon08.png"
                alt=""
                className="inline-block w-5 h-5 align-bottom ml-2 rotate-180 translate-y-1"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
