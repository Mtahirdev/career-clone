import React from "react";

import VideoCard from "./VideoCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import CampusesActiveSlide from "./CampusesActiveSlide.jsx";
import { motion } from "motion/react";

const CampusesMain = ({ Iframe, setIframe }) => {
  let arr = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  return (
    <>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full rounded-3xl bg-[#03c5870d] h-fit mt-5 flex flex-col items-center"
      >
        <h1 className="text-center text-2xl font-bold pt-5">
          Explore Campuses
        </h1>

        <p className="text-center w-[85%] pt-3 text-[#595959]">
          Elevate Your Skills and Land Your Dream Job - Whether you prefer the
          convenience of learning from home or the advantages of direct sessions
          on campus with our expert instructors, we've got you covered!
        </p>
        <button className="hover:scale-105 text-center text-[20px] mt-5 mb-5 font-bold text-white px-5 py-2 rounded-3xl bg-linear-to-br from-green-500 to-blue-500">
          Explore Campuses
        </button>
        <div className="w-full overflow-hidden h-fit">
          <Swiper
            className="w-full lg:w-[90%] h-fit "
            modules={[Autoplay]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                centeredSlides: false,
              },
              768: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1024: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              1180: {
                slidesPerView: 3,
                centeredSlides: false,
              },
            }}
          >
            {arr.map((ele) => {
              return (
                <SwiperSlide>
                  <div className="flex justify-center w-full h-full">
                    <CampusesActiveSlide
                      Iframe={Iframe}
                      setIframe={setIframe}
                    ></CampusesActiveSlide>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </motion.div>
    </>
  );
};

export default CampusesMain;
