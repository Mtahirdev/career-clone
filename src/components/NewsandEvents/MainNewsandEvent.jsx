import React, { useState } from "react";
import ButtonContainer from "./ButtonContainer.jsx";
import NewsBox from "./NewsBox.jsx";
import EventBox from "./EventBox.jsx";
import ChooseUsBanner from "./ChooseUsBanner.jsx";
import { motion } from "motion/react";

const MainNewsandEvent = () => {
  let [toggle, settoggle] = useState("News");
  return (
    <>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full h-fit bg-[#0782620d] flex flex-col gap-10 justify-center items-center pb-16 "
      >
        <ButtonContainer
          toggle={toggle}
          settoggle={settoggle}
        ></ButtonContainer>

        <div className="md:hidden">
          {toggle == "News" ? <NewsBox></NewsBox> : <EventBox></EventBox>}
        </div>

        <div className="md:hidden">
          <ChooseUsBanner></ChooseUsBanner>
        </div>

        <div className="hidden md:flex md:flex-row md:w-full md:h-fit">
          <div className="lg:w-[33%] md:w-1/2 h-fit">
            <NewsBox></NewsBox>
          </div>
          <div className="lg:w-[33%] md:w-1/2 h-fit">
            <EventBox></EventBox>
          </div>
          <div className="md:hidden lg:flex lg:w-[33%]">
            <ChooseUsBanner></ChooseUsBanner>
          </div>
        </div>
        <div className="lg:hidden hidden md:flex">
          <ChooseUsBanner></ChooseUsBanner>
        </div>
      </motion.div>
    </>
  );
};

export default MainNewsandEvent;
