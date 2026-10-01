import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const ProgramLink = () => {
  let [program, setprogram] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: -100, y: -50 }}
        animate={{ x: 0, y: 0, transition: { duration: 0.5 } }}
        className="w-full h-13 flex justify-between items-center hover:bg-gray-200/25"
      >
        <div className="w-full h-full  flex  gap-3 pl-4  items-center text-[#AAAAAA]">
          <span className="text-2xl">
            <IoMdSettings />
          </span>
          <h1 className="text-[16px] self-center">Programs</h1>
        </div>
        <motion.div
          whileTap={{ rotate: 360 }}
          onClick={() => {
            setprogram(!program);
          }}
        >
          {program == true ? (
            <IoIosArrowUp className="text-2xl text-[#AAAAAA] mr-4 " />
          ) : (
            <IoIosArrowDown className="text-2xl text-[#AAAAAA] mr-4 " />
          )}
        </motion.div>
      </motion.div>
      <AnimatePresence>
        {program && (
          <>
            <Link to="/program">
              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0, transition: { duration: 1 } }}
                className="pl-4 w-[70%] hover:rounded-2xl h-10 flex items-center ml-14 text-center text-[#AAAAAA] hover:bg-linear-to-br from-blue-400 to-green-400 hover:text-white "
              >
                Course and Certification
              </motion.div>
            </Link>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProgramLink;
