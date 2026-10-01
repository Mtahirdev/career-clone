import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const GalleryMain = () => {
  let [indexofnav, setindexofnav] = useState(0);
  let arroflink = [
    "Coworking Space",
    "Campuses",
    "Classrooms",
    "NAVTIC",
    "Certificate Distribution",
    "Events",
  ];

  let img = [{}, {}, {}, {}, {}, {}];
  return (
    <>
      <div className="w-full rounded-3xl  h-fit mt-20 gap-8 flex flex-col items-center justify-center">
        <h1 className="text-center text-4xl text-[#000000] font-bold pt-5">
          Gallery
        </h1>
        {/* NavBar of Gallery */}
        <div className="w-[90%] h-16 desk:justify-center  rounded-full bg-linear-to-br from-green-500 to-blue-500 flex gap-x-10 lg:gap-x-5 overflow-x-scroll scrollbar-none   items-center">
          {arroflink.map((ele, index) => {
            let active = index === indexofnav;
            return (
              <Link
                to={""}
                onClick={() => setindexofnav(index)}
                className={`text-[20px] px-4 py-2 rounded-full  text-white shrink-0 whitespace-nowrap ${active == true ? " bg-gray-200/25" : ""} `}
              >
                {ele}
              </Link>
            );
          })}
        </div>
        {/* Images div */}
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  place-items-center gap-y-5">
          {img.map((ele) => {
            return (
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 100, rotateY: 360 }}
                transition={{ duration: 1.3 }}
                className="group w-70 h-60 rounded-2xl"
              >
                <div className="group-hover:flex w-70 h-60 absolute hidden rounded-2xl  z-50 bg-gray-500/50 text-white font-bold  justify-center items-center">
                  Coworking Space
                </div>
                <img
                  src="https://career.edu.pk/gallery-image/115?v=9a1989129313"
                  className="w-full h-full rounded-2xl"
                  alt=""
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GalleryMain;
