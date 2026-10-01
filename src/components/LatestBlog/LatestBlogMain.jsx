import React, { useState } from "react";
import BlogCard from "./BlogCard.jsx";
import { Swiper } from "swiper/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

const LatestBlogMain = () => {
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
      <div className="w-full rounded-3xl  h-fit mt-20  flex flex-col items-center">
        <h1 className="text-center text-4xl text-[#000000] font-bold pt-5">
          Latest Blogs
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
              loop={true}
              onSwiper={(swiper) => setSwiper(swiper)}
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
                      <BlogCard></BlogCard>
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
        <button className="hover:scale-110 py-3 px-8 rounded-3xl border-2 text-2xl font-bold text-white bg-linear-to-br from-blue-500 to-green-500  ">
          Read More
        </button>
      </div>
    </>
  );
};

export default LatestBlogMain;
