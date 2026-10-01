import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp, IoIosPaper } from "react-icons/io";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const TestingLink = () => {
  let [testing, settesting] = useState(false);

  return (
    <>
      <motion.div
        initial={{ x: -100, y: -50 }}
        animate={{ x: 0, y: 0, transition: { duration: 0.5 } }}
        className="w-full h-13 flex justify-between items-center hover:bg-gray-200/25"
      >
        <div className="w-full h-full  flex  gap-3 pl-4  items-center text-[#AAAAAA]">
          <span className="text-2xl">
            <IoIosPaper />
          </span>
          <h1 className="text-[16px] self-center">Testing Services</h1>
        </div>
        <motion.div
          whileTap={{ rotate: 360 }}
          onClick={() => {
            settesting(!testing);
          }}
        >
          {testing == true ? (
            <IoIosArrowUp className="text-2xl text-[#AAAAAA] mr-4 " />
          ) : (
            <IoIosArrowDown className="text-2xl text-[#AAAAAA] mr-4 " />
          )}
        </motion.div>
      </motion.div>
      {testing == true ? (
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0, transition: { duration: 1 } }}
          className="w-[85%] h-fit ml-14 md:w-[70%]   gap-2 text-[#AAAAAA] flex flex-col   justify-center "
        >
          <Link to="/person-vue">
            <h1 className="hover:bg-linear-to-br from-blue-400 to to-green-400 hover:rounded-2xl  pl-2 h-10  items-center hover:text-white pt-2">
              Pearson VUE Testing Center
            </h1>
          </Link>
          <Link to="/psi-exam">
            <h1 className="hover:bg-linear-to-br from-blue-400 to to-green-400 hover:rounded-2xl  pl-2 h-10  items-center hover:text-white pt-2">
              PSI Exam Center
            </h1>
          </Link>
          <Link to="/kryterion">
            <h1 className="hover:bg-linear-to-br from-blue-400 to to-green-400 hover:rounded-2xl  pl-2 h-10  items-center hover:text-white pt-2">
              Kryterion Testing Center
            </h1>
          </Link>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};

export default TestingLink;
