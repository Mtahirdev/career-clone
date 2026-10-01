import { motion } from "motion/react";
import React from "react";
import { Link } from "react-router-dom";

let MotionLink = motion.create(Link);
const MotionLInkCom = ({ ele }) => {
  return (
    <>
      <MotionLink
        to={ele.to}
        initial={{ x: -100, y: -50 }}
        animate={{ x: 0, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-13 hover:bg-gray-200/25 flex gap-3 pl-4 items-center text-[#AAAAAA]"
      >
        <span className="text-2xl">{ele.icon}</span>
        <h1 className="text-[16px] self-center">{ele.name}</h1>
      </MotionLink>
    </>
  );
};

export default MotionLInkCom;
