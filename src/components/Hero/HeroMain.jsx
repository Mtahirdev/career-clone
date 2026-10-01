import React from "react";
import Hero from "./Hero.jsx";
import { motion } from "motion/react";

const HeroMain = () => {
  return (
    <>
      <motion.div
        initial={{ y: 150, opacity: 0 }}
        whileInView={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.5 }}
        className="w-screen h-fit mt-10   flex justify-center items-center"
      >
        <Hero></Hero>
      </motion.div>
    </>
  );
};

export default HeroMain;
