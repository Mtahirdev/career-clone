import React, { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import FeaturedSuccessStoriesCard from "./FeautredSuccessStoriesCard";
import VideoSuccessCard from "./VideoSuccessCard.jsx";

const ExperienceVideoMain = ({ Iframe, setIframe }) => {
  const [swiper, setSwiper] = useState(null);
  let arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 1 }}
        className="w-full rounded-3xl bg-[#03c5870d] h-fit mt-5 flex flex-col items-center"
      >
        <h1 className="text-center text-2xl lg:text-4xl md:text-3xl font-bold pt-5">
          Real Experiences From Real Students
        </h1>

        <div className="pt-5 w-full flex items-center justify-center">
          <button
            onClick={() => swiper?.slidePrev()}
            className="hidden relative md:left-2 lg:left-12 md:flex shrink-0 w-16 h-16 justify-center items-center text-4xl z-10 bg-[#ffffffcc] shadow-2xl shadow-[#00000012] rounded-full"
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
                  slidesPerView: 3,
                  centeredSlides: false,
                },
                1180: {
                  slidesPerView: 3,
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
                      <VideoSuccessCard
                        Iframe={Iframe}
                        setIframe={setIframe}
                      ></VideoSuccessCard>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <button
            onClick={() => swiper?.slideNext()}
            className="hidden relative md:right-2 lg:right-12 md:flex shrink-0 w-16 h-16 justify-center items-center text-4xl z-10 bg-[#ffffffcc] shadow-2xl shadow-[#00000012] rounded-full"
          >
            <IoIosArrowForward />
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default ExperienceVideoMain;
