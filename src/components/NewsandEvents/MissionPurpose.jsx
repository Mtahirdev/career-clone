import React, { useState } from "react";

const MissionPurpose = () => {
  let [toggle, settoggle] = useState("mission");
  return (
    <>
      <div className="flex flex-col w-full h-fit gap-5">
        <div className="flex justify-evenly items-center w-full h-fit flex-col gap-5">
          <div className="flex justify-evenly w-full items-center text-2xl">
            <button
              onClick={() => settoggle("mission")}
              className={`${toggle == "mission" ? "bg-linear-to-br from-green-500 to-blue-500 text-white" : ""} px-3 py-2 rounded-2xl`}
            >
              Mission
            </button>
            <button
              onClick={() => settoggle("purpose")}
              className={`${toggle == "mission" ? "" : "bg-linear-to-br from-green-500 to-blue-500 text-white"} px-3 py-2 rounded-2xl`}
            >
              Purpose
            </button>
          </div>
          <div className="w-[80%] self-center justify-self-center h-0.5 bg-gray-400"></div>
        </div>

        <div className="w-full h-fit flex justify-center items-center">
          {toggle == "mission" ? (
            <div className="flex w-[90%] flex-col gap-5">
              <h1 className="text-2xl font-bold">Mission</h1>
              <p>
                At Career Institute, our mission is to empower individuals with
                the knowledge and skills needed to excel in the dynamic world of
                Information Technology. We are dedicated to fostering personal
                and professional growth by providing top-notch IT education and
                career development services. Our aim is to produce
                industry-ready professionals who can lead and innovate in their
                chosen fields.
              </p>
            </div>
          ) : (
            <div className="flex w-[90%] flex-col gap-5">
              <h1 className="text-2xl font-bold">Purpose</h1>
              <p>
                Our purpose is to bridge the gap between education, industry,
                and employment. We deliver practical training that meets the
                evolving needs of learners and employers. Our B2C, B2B, and B2G
                services create value for individuals, organizations, and
                public-sector institutions. We are committed to building skilled
                professionals, stronger organizations, and sustainable economic
                growth.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MissionPurpose;
