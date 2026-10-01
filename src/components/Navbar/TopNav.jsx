import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";

const TopNav = () => {
  let arr = [
    {
      name: "Online Admission",
      to: "/online-admission",
    },
    {
      name: "How to Pay",
      to: "/howtopay",
    },
    {
      name: "Verification",
      to: "/verification",
    },
    {
      name: "Job Placement",
      to: "/job",
    },
    {
      name: "Ambassador Program",
      to: "/ambassador",
    },
    {
      name: "Success Stories",
      to: "/success-stories",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="bg-[#01324d] w-full   md:justify-start md:pl-9 h-8 lg:h-12 flex justify-center items-center"
      >
        <div className="flex justify-center items-center gap-5 lg:w-[30%]">
          <Link className="scale-105 flex w-fit h-full items-center justify-center gap-2 self-center text-[11px] font-semibold text-white">
            <span className="">
              <FaPhone />
            </span>
            <span>+92-320-2981965</span>
          </Link>
          <Link className="scale-105 flex w-fit h-full justify-center items-center gap-2 self-center text-[11px] font-semibold text-white">
            <span className="">
              <MdEmail />
            </span>
            <span>tahirpansota@gamil.com</span>
          </Link>
        </div>
        <div className="lg:flex lg:font-semibold lg:w-[65%]  lg:text-white lg:text-[12px] lg:justify-evenly hidden ">
          {arr.map((ele) => {
            return (
              <Link
                key={ele.name}
                to={ele.to}
                className="px-3 py-1 lg:hover:rounded-2xl lg:hover:bg-gray-300/30 bg-fixed scale-105"
              >
                {ele.name}
              </Link>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default TopNav;
