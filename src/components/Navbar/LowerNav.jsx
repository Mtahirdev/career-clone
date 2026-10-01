import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { IoIosArrowUp, IoMdHome, IoMdMenu } from "react-icons/io";
import {
  MdContacts,
  MdDomainVerification,
  MdOutlinePayments,
} from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { RiErrorWarningLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const LowerNav = ({ toggle, settoggle }) => {
  let arr = [
    { name: "Home", icon: <IoMdHome />, to: "/" },
    { name: "About", icon: <RiErrorWarningLine />, to: "/about-us" },
  ];

  let arr2 = [
    { name: "Coworking Space", icon: <FaComputer />, to: "/coworking-space" },
    { name: "Study Abroad", icon: <PiStudentFill />, to: "/study-abroad" },
    { name: "Contact", icon: <MdContacts />, to: "/contact-us" },
  ];

  let [open, setopen] = useState(localStorage.getItem("navOne") || 0);
  let [opentwo, setopentwo] = useState(localStorage.getItem("navTwo") || 0);

  let funOne = (index) => {
    setopen(index);
    localStorage.setItem("navOne", index);
  };

  let funTwo = (index) => {
    setopentwo(index);
    localStorage.setItem("navTwo", index);
  };
  return (
    <>
      <motion.div
        initial={{ x: -150 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 157, 184, 0.15) 0%, rgba(0, 196, 135, 0.15) 100%)",
        }}
        className="w-full h-20 flex lg:justify-evenly justify-between  "
      >
        <img
          src="https://career.edu.pk/assets/images/logo.svg"
          className="h-20 w-52 ml-4 scale-105 "
          alt=""
        />
        <IoMdMenu
          className="text-5xl self-center mr-4 z-20 lg:hidden  "
          onClick={() => settoggle(!toggle)}
        />
        <motion.div
          initial={{ x: -150, y: -100 }}
          animate={{ x: 0, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:flex hidden w-[70%] text-black items-center justify-evenly text-[16px] font-semibold"
        >
          {arr.map((ele, index) => {
            let active = index === open;
            console.log(active);

            return (
              <Link
                key={index}
                to={ele.to}
                onClick={() => funOne(index)}
                className={`lg:text-[14px] hover:bg-linear-to-br hover:from-blue-400/25 hover:to-green-400/25 ${active == true ? "bg-linear-to-br from-blue-400/25 to-green-400/25" : ""}  px-3 py-1 rounded-2xl`}
              >
                {ele.name}
              </Link>
            );
          })}

          {/* first link */}
          <div className="flex flex-col justify-center items-center group  ">
            <Link className="flex gap-2 items-center font-semibold hover:bg-linear-to-br hover:from-blue-400/25 hover:to-green-400/25 px-3 py-1 rounded-2xl">
              <h1 className="lg:text-[14px]">Program</h1>
              <motion.div className="group-hover:rotate-180">
                <IoIosArrowUp className=" " />
              </motion.div>
            </Link>
            <div className="bg-gray-200 hidden group-hover:flex text-[#AAAAAA] absolute px-3 py-3 top-26 rounded-b-2xl  hover:bg-linear-to-br from-blue-400 to-green-400 hover:text-white ">
              <Link to="/program">Course and Certification</Link>
            </div>
          </div>

          {/* second link */}
          <div className="group">
            <Link className="flex  gap-2 items-center font-semibold hover:bg-linear-to-br hover:from-blue-400/25 hover:to-green-400/25 px-3 py-1 rounded-2xl">
              <h1 className=" lg:text-[14px]">Testing Services</h1>
              <motion.div className="group-hover:rotate-180">
                <IoIosArrowUp className=" " />
              </motion.div>
            </Link>
            <div className="bg-gray-200 hidden group-hover:flex group-hover:flex-col  text-[#AAAAAA] absolute px-3 py-3 top-26 rounded-b-2xl   gap-2">
              <Link to="/person-vue">
                <h1 className="hover:bg-linear-to-br from-blue-400 to to-green-400 hover:rounded-2xl  pl-3 pr-3 h-10  items-center hover:text-white pt-2">
                  Pearson VUE Testing Center
                </h1>
              </Link>
              <Link to="/psi-exam">
                <h1 className="hover:bg-linear-to-br from-blue-400 to to-green-400 hover:rounded-2xl  pl-3 pr-3 h-10  items-center hover:text-white pt-2">
                  PSI Exam Center
                </h1>
              </Link>
              <Link to="/kryterion">
                <h1 className="hover:bg-linear-to-br from-blue-400 to to-green-400 hover:rounded-2xl  pl-3 pr-3 h-10  items-center hover:text-white pt-2">
                  Kryterion Testing Center
                </h1>
              </Link>
            </div>
          </div>

          {arr2.map((ele, index) => {
            let active = index === opentwo;

            return (
              <Link
                key={index}
                to={ele.to}
                onClick={() => funTwo(index)}
                className={`lg:text-[14px] hover:bg-linear-to-br hover:from-blue-400/25 hover:to-green-400/25 px-3 py-1 rounded-2xl  ${active == true ? "bg-linear-to-br from-blue-400/25 to-green-400/25" : ""} `}
              >
                {ele.name}
              </Link>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default LowerNav;
