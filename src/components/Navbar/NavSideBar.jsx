import React, { useEffect, useRef, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { IoMdHome } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import { FaComputer } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { MdContacts } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { MdDomainVerification } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";
import { FaCheckCircle } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoIosPaper } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import ProgramLink from "./ProgramLink";
import TestingLink from "./TestingLink";
let MotionLink = motion.create(Link);
const NavSideBar = ({ toggle, settoggle }) => {
  let arr = [
    { name: "Home", icon: <IoMdHome />, to: "/" },
    { name: "About", icon: <RiErrorWarningLine />, to: "/about-us" },
  ];

  let arr2 = [
    { name: "Coworking Space", icon: <FaComputer />, to: "/coworking-space" },
    { name: "Study Abroad", icon: <PiStudentFill />, to: "/study-abroad" },
    { name: "Contact", icon: <MdContacts />, to: "/contact-us" },
    { name: "How to Pay", icon: <MdOutlinePayments />, to: "/howtopay" },
    {
      name: "Verification",
      icon: <MdDomainVerification />,
      to: "/verification",
    },
    { name: "Ambassador Program", icon: <GrAnnounce />, to: "/ambassador" },
    {
      name: "Success Stories",
      icon: <FaCheckCircle />,
      to: "/success-stories",
    },
  ];
  return (
    <>
      <AnimatePresence>
        {toggle && (
          <div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="w-[90%] md:w-[53%] h-screen bg-[#012E4B] fixed top-0 z-50 overflow-x-hidden scrollbar-none lg:hidden "
          >
            {/* first img */}
            <motion.div
              animate={{ rotate: 360, transition: { duration: 2 } }}
              style={{
                background:
                  "url('https://career.edu.pk/assets/images/img44.png')",
              }}
              className="w-48 h-44   absolute top-5 left-auto -right-3.5 bottom-auto  bg-size-[100%]  bg-no-repeat"
            ></motion.div>
            {/* second img */}
            <motion.div
              animate={{ rotate: 360, transition: { duration: 2 } }}
              style={{
                background:
                  "url('https://career.edu.pk/assets/images/img45.png')",
              }}
              className="w-60 h-60 mx-0  my-auto absolute top-auto left-6 scale-75 right-0 bottom-3  bg-cover  bg-no-repeat"
            ></motion.div>

            <motion.div
              initial={{ y: -100 }}
              animate={{ y: 0, transition: { duration: 0.5 } }}
              className="w-[90%] md:w-[53%] h-20 flex justify-between absolute  items-center text-white mt-5"
            >
              <img
                className="w-24 h-22 ml-5"
                src="https://career.edu.pk/assets/images/mobile-logo.svg"
                alt=""
              />
              <RxCross1
                className="text-3xl font-extrabold md:-mr-40 mr-5 "
                onClick={() => settoggle(!toggle)}
              />
            </motion.div>
            <div className=" overflow-scroll scrollbar-none  w-full h-fit flex flex-col gap-1 absolute top-24">
              {arr.map((ele) => {
                return (
                  <MotionLink
                    key={ele.name}
                    to={ele.to}
                    initial={{ x: -100, y: -50 }}
                    animate={{ x: 0, y: 0, transition: { duration: 0.5 } }}
                    className="w-full h-13 hover:bg-gray-200/25 flex  gap-3 pl-4  items-center text-[#AAAAAA]"
                  >
                    <span className="text-2xl">{ele.icon}</span>
                    <h1 className="text-[16px] self-center">{ele.name}</h1>
                  </MotionLink>
                );
              })}
              {/* first link */}
              <ProgramLink></ProgramLink>
              {/* second link */}
              <TestingLink></TestingLink>

              {arr2.map((ele) => {
                return (
                  <MotionLink
                    key={ele.name}
                    to={ele.to}
                    initial={{ x: -100, y: -50 }}
                    animate={{ x: 0, y: 0, transition: { duration: 0.5 } }}
                    className="w-full h-13 hover:bg-gray-200/25 flex  gap-3 pl-4  items-center text-[#AAAAAA]"
                  >
                    <span className="text-2xl">{ele.icon}</span>
                    <h1 className="text-[16px] self-center">{ele.name}</h1>
                  </MotionLink>
                );
              })}
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavSideBar;
