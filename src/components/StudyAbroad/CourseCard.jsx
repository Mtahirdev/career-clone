import React from "react";
import { useSwiperSlide } from "swiper/react";

const CourseCard = () => {
  let swiperSlide = useSwiperSlide();

  return (
    <>
      <div
        className={`w-[90%] h-116  rounded-2xl flex flex-col justify-center items-center gap-3 ${swiperSlide.isActive == true ? "" : ""} ${swiperSlide.isNext == true ? " " : ""}  `}
      >
        <img
          src="https://career.edu.pk/course-image/32?v=3d0e44dc5f8f"
          className="w-full h-58 rounded-2xl "
          alt=""
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[#000000]">
            Language & Test Preparation
          </h1>
          <h1 className="text-[#000000] text-[11px]">
            IELTS for UKVI Life Skill A1
          </h1>
        </div>
        <p className="text-center w-[90%] text-[#595959]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          facere minus at illo ullam quidem ipsam veniam nihil quia aspernatur?
        </p>
        <button className="font-bold text-[#595959] bg-green-400 px-4 py-2 rounded-2xl">
          Enroll Now
        </button>
      </div>
    </>
  );
};

export default CourseCard;
