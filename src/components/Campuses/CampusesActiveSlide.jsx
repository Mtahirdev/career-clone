import React from "react";
import { useSwiperSlide } from "swiper/react";
import VideoCard from "./VideoCard.jsx";

const CampusesActiveSlide = ({ Iframe, setIframe }) => {
  let swiperSlide = useSwiperSlide();
  return (
    <div
      className={`transition-all duration-300 w-full h-fit flex justify-center ${
        swiperSlide.isActive ? "" : ""
      }`}
    >
      <VideoCard Iframe={Iframe} setIframe={setIframe} />
    </div>
  );
};

export default CampusesActiveSlide;
