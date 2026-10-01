const KryterionBanner = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "url('https://career.edu.pk/assets/images/banner13.png')",
        }}
        className="w-full h-60 md:h-70 lg:h-90 mt-6 bg-cover bg-center bg-no-repeat bg-red-50 flex flex-col justify-end"
      >
        <div className="w-68 text-center h-48 md:w-90 md:h-48 lg:h-48 md:ml-9 lg:ml-12 ml-4 font-bold text-white text-[18px] md:text-2xl rounded-t-2xl bg-linear-to-br from-green-500/60 to-blue-500/60 flex flex-col justify-center items-center ">
          <h1>Providing Smarter</h1>
          <h1 className="text-2xl">Testing Solution</h1>
          <p className="text-[12px] md:text-[14px] mt-3 w-[80%]">
            Benefit from our online test development tools and best practices
            methodologies to quickly and cost effectively develop high-quality
            certif-cation programs
          </p>
        </div>
      </div>
    </>
  );
};

export default KryterionBanner;
