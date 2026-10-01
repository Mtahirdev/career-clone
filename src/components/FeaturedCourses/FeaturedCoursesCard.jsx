import React from "react";

const FeaturedCoursesCard = () => {
  return (
    <>
      <div className="w-[95%] h-90">
        <img
          src="https://career.edu.pk/course-image/42?v=1f78bbd9cb89"
          alt=""
          className="w-full h-36 rounded-t-3xl"
        />
        <div className="flex flex-col gap-2 w-full bg-[#fff] mt-2 pl-4 rounded-2xl pb-2">
          <h1 className="text-[#000000] font-bold pt-3 ">Shopify eCommerce</h1>
          {/* category */}
          <div className="flex gap-2  w-full items-center">
            <h1 className="text-[13px] font-bold">Category:</h1>
            <h1 className="text-[10px] pt-1 text-[#535353S]">
              Digital Marketing & Ecommerce
            </h1>
          </div>
          {/* duration */}
          <div className="flex gap-3 w-full items-center">
            <h1 className="text-[13px] font-bold">Duration:</h1>
            <div className="flex w-full gap-2 items-center">
              <img
                src="https://career.edu.pk/assets/images/icon12.svg"
                alt=""
              />
              <h1 className="text-[10px]  text-[#535353S]">8 Weeks</h1>
            </div>
          </div>
          {/* Mode */}
          <div className="flex w-full gap-3 items-center">
            <h1 className="text-[13px] font-bold">Mode:</h1>
            <div className="flex w-full gap-2 items-center">
              <img
                src="https://career.edu.pk/assets/images/icon09.svg"
                alt=""
              />
              <h1 className="text-[10px] pt-1 text-[#535353S]">On-Campus</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCoursesCard;
