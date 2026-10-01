import React, { useState } from "react";
import { Swiper } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import OrganizationCard from "./ProgramCard.jsx";
import ProgramCard from "./ProgramCard.jsx";

const ProgramSlider = () => {
  const [swiper, setSwiper] = useState(null);

  let arr = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  return (
    <>
      <div className="w-full rounded-3xl  h-fit mt-2 gap-8 flex flex-col items-center">
        <div className="pt-5 w-full flex items-center justify-center">
          <button
            onClick={() => swiper?.slidePrev()}
            className=" relative md:left-2 lg:left-12 md:flex shrink-0 w-8 h-8 justify-center items-center text-2xl z-10 bg-[#ffffff33] shadow-2xl shadow-[#00000012] rounded-full"
          >
            <IoIosArrowBack />
          </button>

          <div className="w-full overflow-hidden ">
            <Swiper
              className="w-[90%] "
              modules={[Autoplay]}
              spaceBetween={20}
              onSwiper={(swiper) => setSwiper(swiper)}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 4,
                  centeredSlides: false,
                },
                1180: {
                  slidesPerView: 5,
                  centeredSlides: false,
                },
              }}
            >
              {/* <PrevButton />
            <NextButton /> */}
              {arr.map((ele) => {
                return (
                  <SwiperSlide>
                    <div className="flex justify-center w-full">
                      <ProgramCard></ProgramCard>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <button
            onClick={() => swiper?.slideNext()}
            className=" relative md:right-2 lg:right-12 md:flex shrink-0 w-8 h-8 justify-center items-center text-2xl z-10 bg-[#ffffff33] shadow-2xl shadow-[#00000012] rounded-full"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProgramSlider;
