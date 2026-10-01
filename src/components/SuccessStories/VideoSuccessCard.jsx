import React from "react";
import { useSwiperSlide } from "swiper/react";

const VideoCard = ({ Iframe, setIframe }) => {
  return (
    <>
      <div className="w-[95%] h-40 mobile:h-50 rounded-2xl ">
        <div
          className="flex w-full justify-center items-center h-full bg-cover bg-center bg-no-repeat rounded-2xl"
          style={{
            backgroundImage:
              "url('https://career.edu.pk/assets/images/campuses/jinnah-colony-branch.jpeg')",
          }}
          alt=""
        >
          <button onClick={() => setIframe(!Iframe)}>
            <img src="https://career.edu.pk/assets/images/ply-btn.png" alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
