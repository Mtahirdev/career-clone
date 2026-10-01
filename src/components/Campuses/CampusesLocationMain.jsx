import React, { useState } from "react";
import CampusesLocationBox from "./CampusesLocationBox";
import CampusesLocationFrame from "./CampusesLocationFrame";

const CampusesLocationMain = () => {
  let [url, seturl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.9558479662937!2d73.09418097469306!3d31.446387050795256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922696ac9459bed%3A0x4d837d0ef403530e!2sCareer%20Institute%20-%20Millat%20Chowk%20Branch%20Faisalabad!5e1!3m2!1sen!2s!4v1790661386844!5m2!1sen!2s",
  );
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center text-2xl text-[#000000] md:text-3xl lg:text-4xl mt-10">
        <h1>Our Campuses</h1>
      </div>
      <div className="w-full h-fit grid grid-cols-1 gap-4 lg:grid-cols-2 mt-10">
        <CampusesLocationBox seturl={seturl}></CampusesLocationBox>
        <CampusesLocationFrame url={url}></CampusesLocationFrame>
      </div>
    </>
  );
};

export default CampusesLocationMain;
