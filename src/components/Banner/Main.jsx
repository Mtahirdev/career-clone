import React from "react";
import CareerForm from "./CareerForm";
import ImageSetup from "./ImageSetup";
import Box from "./Box.jsx";

const Main = () => {
  return (
    <>
      <div className="bg-[url('https://career.edu.pk/assets/images/banner01.png')] bg-cover w-full h-fit pb-16 overflow-x-hidden overflow-hidden flex flex-col gap-10 lg:gap-0 items-center justify-center lg:flex-row lg:flex lg:flex-wrap lg:gap-y-10 lg:justify-evenly lg:items-center ">
        <CareerForm></CareerForm>
        <ImageSetup></ImageSetup>
        <Box></Box>
      </div>
    </>
  );
};

export default Main;
