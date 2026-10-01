import React from "react";
import MissionPurpose from "./MissionPurpose.jsx";
import { Link } from "react-router-dom";
import NewsBox from "./NewsBox.jsx";

const MissionPurposeNewsMain = () => {
  return (
    <div className="flex mt-10 justify-center items-center gap-20 flex-col lg:flex-row lg:justify-evenly lg:items-center  w-full h-fit">
      <div className="lg:w-[40%] lg:h-116 ">
        <MissionPurpose></MissionPurpose>
      </div>
      <div className="flex flex-col gap-5 lg:w-[60%]  lg:h-116 lg:pt-3 ">
        <div className="flex gap-5 items-center">
          <h1 className="text-2xl">Latest News</h1>
          <Link className="text-blue-300 underline">view all news</Link>
        </div>
        <NewsBox toggle={true}></NewsBox>
      </div>
    </div>
  );
};

export default MissionPurposeNewsMain;
