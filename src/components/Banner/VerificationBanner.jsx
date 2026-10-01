const VerificationBanner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://career.edu.pk/assets/images/banner17.png')",
        }}
        className="w-full h-40 md:h-70 lg:h-90 mt-6 bg-cover bg-center bg-no-repeat bg-red-50 flex flex-col justify-center items-center"
      >
        <div className="w-68 text-center h-30 md:w-90 md:h-30 flex-col gap-5 lg:h-40 md:ml-9 lg:ml-12 ml-4 font-bold text-white text-[18px] md:text-2xl rounded-t-2xl  flex justify-center items-center ">
          <h1 className="text-2xl lg:text-4xl text-white">Verification</h1>
          <h2 className="text-[14px] text-white">
            Verify your Certificate, Diploma, Internship Letter, or Experience
            Letter by entering the provided Verification ID.
          </h2>
        </div>
      </div>
    </>
  );
};

export default VerificationBanner;
