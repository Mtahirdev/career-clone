import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const EventBoxCard = () => {
  return (
    <div className="flex w-[95%] h-32 items-center gap-3  border border-gray-400 rounded-2xl">
      <div className="bg-linear-to-br ml-3 from-blue-500 to-green-500 h-20 w-36 text-center rounded-2xl text-white text-2xl font-bold flex justify-center items-center">
        10 Sep
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-[15px] text-[#000000] w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="flex gap-2 items-center self-start justify-self-start bg-[#009DB8] px-3 py-1 rounded-2xl ">
          <FaLocationDot />
          <h2 className="text-[12px] ">Millat Chowk Branch</h2>
        </div>
      </div>
    </div>
  );
};

export default EventBoxCard;
