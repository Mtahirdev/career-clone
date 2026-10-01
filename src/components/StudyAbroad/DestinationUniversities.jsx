import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

const DestinationUniversities = () => {
  let arr = [
    {
      img: "https://career.edu.pk/assets/images/img70.png",
      text: "Study in Canada",
    },
    {
      img: "https://career.edu.pk/assets/images/img70.png",
      text: "Study in Canada",
    },
    {
      img: "https://career.edu.pk/assets/images/img70.png",
      text: "Study in Canada",
    },
    {
      img: "https://career.edu.pk/assets/images/img70.png",
      text: "Study in Canada",
    },
  ];
  return (
    <>
      <div className="w-full h-fit flex flex-col mt-10 justify-center items-center">
        <div className="w-[90%] flex flex-col gap-4 justify-center items-center h-fit text-center">
          <h1 className="w-[90%] md:w-[80%] text-[21px] md:text-2xl lg:text-3xl lg:font-bold text-[#000000]">
            Top Study Abroad Destinations for International Students
          </h1>
          <p className="w-[80%] md:w-[60%] text-[18px] md:text[26px] lg:text-[18px] text-[#595959]">
            Are you ready to take the next step in your academic and
            professional journey? Dreaming of studying at top universities
            around the world? If so, relax and let us guide you every step of
            the way.
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden mt-6 ml-5">
        <Swiper
          className="w-[90%] "
          modules={[Autoplay]}
          spaceBetween={20}
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
              slidesPerView: 4,
              centeredSlides: false,
            },
          }}
        >
          {arr.map((ele) => {
            return (
              <SwiperSlide>
                <div
                  style={{ backgroundImage: `url("${ele.img}")` }}
                  className="flex justify-end rounded-2xl  w-[90%] md:w-80 lg:w-60 h-50 bg-cover bg-center bg-no-repeat text-2xl text-white flex-col"
                >
                  <h1 className="ml-4 mb-3 font-bold">{ele.text}</h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* univerties */}
      <div className="w-full h-fit flex flex-col mt-10 justify-center items-center">
        <div className="w-[90%] flex flex-col mt-10 gap-4 justify-center items-center h-fit text-center">
          <h1 className="w-[90%] md:w-[80%] text-[21px] md:text-2xl lg:text-3xl lg:font-bold text-[#000000]">
            Popular Universities
          </h1>
        </div>
      </div>

      <div className="w-full overflow-hidden mt-6 ml-5 mb-10 ">
        <Swiper
          className="w-[90%]  "
          modules={[Autoplay]}
          spaceBetween={20}
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
              slidesPerView: 4,
              centeredSlides: false,
            },
          }}
        >
          {arr.map((ele) => {
            return (
              <SwiperSlide>
                <div className="flex justify-end rounded-2xl mb-5 w-[90%] lg:w-60  md:w-80 h-fit shadow-2xl shadow-gray-300 flex-col">
                  <img
                    className="w-auto h-auto"
                    src="https://career.edu.pk/assets/images/img47.png"
                    alt=""
                  />
                  <h1 className="ml-4  font-bold text-[20px]">University of</h1>
                  <h1 className="ml-4 font-bold text-[16px] text-[#595959]">
                    Sydney
                  </h1>
                  <h1 className="ml-4 font-bold text-[16px] text-[#595959]">
                    Australia
                  </h1>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="w-full h-fit flex flex-col mb-3  justify-center items-center">
        <button className=" text-[21px] md:text-2xl  text-[#000000] px-6 py-2 rounded-3xl border">
          View All
        </button>
      </div>
    </>
  );
};

export default DestinationUniversities;
