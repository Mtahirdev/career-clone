const PersonVueBanner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://career.edu.pk/assets/images/banner13.png')",
        }}
        className="w-full h-40 md:h-70 lg:h-90 mt-6 bg-cover bg-center bg-no-repeat bg-red-50 flex flex-col justify-end"
      >
        <div className="w-68 text-center h-30 md:w-90 md:h-30 lg:h-40 md:ml-9 lg:ml-12 ml-4 font-bold text-white text-[18px] md:text-2xl rounded-t-2xl bg-linear-to-br from-green-500/60 to-blue-500/60 flex justify-center items-center ">
          Person Vue Testing Center | Pakistan
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-fit gap-3 flex-row text-center text-[20px] mt-4 ">
        <h1 className="w-[40%] text-center text-[#03c587] text-[16px] md:text-2xl lg:w-[30%] desk:w-[23%] lg:text-start lg:text-3xl">
          Expand your business. Advance careers. Power change.
        </h1>
        <div className="bg-linear-to-br from-green-500 to-blue-500 h-22 w-1 mt-4 md:mt-9  transform "></div>
        <span className="w-[40%] text-center text-[#595959] text-[14px] md:text-[21px] lg:w-[30%] lg:text-3xl">
          Deliver in-demand certification exams and unleash opportunity.
        </span>
      </div>
      <div className="w-full mt-5 flex justify-center items-center text-center">
        <div className="w-[90%] bg-[#03c587] rounded-2xl h-fit flex flex-col gap-3 justify-center items-center text-center pt-5 pb-5">
          <h1 className="w-[80%] h-fit text-center text-white text-[18px] md:text-2xl lg:text-3xl md:font-bold ">
            Grow your portfolio...and your potential.
          </h1>
          <h1 className="w-[90%] h-fit text-center text-white text-[16px] md:text-[22px] lg:text-[25px] md:font-bold">
            Our test centers deliver exams for hundreds of top IT and
            credentialing programs.
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center items-center h-fit gap-3 flex-row text-center text-[20px] mt-4 ">
        <h1 className="w-[50%] text-[#595959] text-start ml-3  text-[15px] md:text-[19px] lg:w-[30%] desk:w-[23%] lg:text-start ">
          The journey to a better future starts here. When you become an
          authorized Pearson VUE test center, you directly contribute to your
          community by delivering the certification exams that drive people
          forward in their careers. Join us in supporting the potential of every
          industry and the promise of every professional through computer-based
          testing.
        </h1>
        <div className="bg-linear-to-br  from-green-500 to-blue-500 h-105 w-1 lg:h-60 mt-4 md:mt-9  transform "></div>
        <span className="w-[40%] text-center text-[#03c587] mr-3 text-[16px] md:text-[22px] lg:w-[30%] ">
          Certifications are shaping the future. And you’re a big part of what’s
          to come.
        </span>
      </div>
    </>
  );
};

export default PersonVueBanner;
