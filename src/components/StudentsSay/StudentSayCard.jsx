import React from "react";
import { useSwiperSlide } from "swiper/react";

const StudentSayCard = () => {
  let swiperSlide = useSwiperSlide();

  return (
    <>
      <div
        className={`w-[90%] h-110 border-2 rounded-2xl flex flex-col justify-center items-center gap-4 ${swiperSlide.isActive == true ? "border-blue-400 lg:border-black" : ""} ${swiperSlide.isNext == true ? "border-blue-400 " : ""}  `}
      >
        <img
          src="https://career.edu.pk/uploads/alumni/67722b17-2c9e-402b-8621-8b3605ec1a08.webp"
          className="w-30 h-30 rounded-full"
          alt=""
        />
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-[#000000]">Muhammad Aslam</h1>
          <h1 className="text-[#000000] text-[11px]">Digital Marketing</h1>
        </div>
        <h1 className="font-bold text-[#595959]">Reviews</h1>
        <p className="text-center w-[90%] text-[#595959]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          facere minus at illo ullam quidem ipsam veniam nihil quia aspernatur?
        </p>
      </div>
    </>
  );
};

export default StudentSayCard;
