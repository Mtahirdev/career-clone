import React from "react";
import { Link } from "react-router-dom";
import { IoMdContact } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const FooterMain = () => {
  let arr = [{}, {}, {}, {}, {}, {}, {}];
  let contact = [{}, {}, {}, {}];
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://cdn.simpleicons.org/facebook/1877F2",
      link: "#",
    },
    {
      name: "Instagram",
      url: "https://cdn.simpleicons.org/instagram/E4405F",
      link: "#",
    },
    {
      name: "YouTube",
      url: "https://cdn.simpleicons.org/youtube/FF0000",
      link: "#",
    },
    {
      name: "TikTok",
      url: "https://cdn.simpleicons.org/tiktok/000000",
      link: "#",
    },
    {
      name: "LinkedIn",
      url: "https://career.edu.pk/assets/images/linkdin.png",
      link: "#",
    },

    {
      name: "WhatsApp",
      url: "https://cdn.simpleicons.org/whatsapp/25D366",
      link: "#",
    },
  ];

  return (
    <>
      <div className="bg-[#03c5870d] w-full h-fit pb-10 mt-10 flex flex-col gap-8 justify-center items-center">
        <div className="h-1 w-full bg-linear-to-br from-blue-500 to-green-500"></div>
        {/* Main div */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-row-3 lg:grid-cols-4 gap-y-6 place-items-center">
          {/* about div */}
          <div className="flex flex-col mx-auto w-[90%] gap-3 justify-center items-center col-span-3 lg:col-span-1">
            <img
              className="self-start"
              src="https://career.edu.pk/assets/images/footer-logo.svg"
              alt=""
            />
            <p className="w-[90%] text-[#000000]">
              Since 2010, Career Institute has delivered industry-focused IT
              training, international testing services and modern coworking
              spaces for learners, professionals and startups.
            </p>
          </div>
          {/* Important Link */}
          <div className="flex flex-col w-[90%] justify-center items-center gap-2">
            <h1 className="text-[18px] font-bold">Important Link</h1>
            {arr.map((ele) => {
              return (
                <Link className="flex gap-0.5 items-center text-[14px]">
                  <IoMdArrowDropright />
                  <h1>Coworking Space</h1>
                </Link>
              );
            })}
          </div>
          {/* other Link */}
          <div className="flex flex-col w-[90%] justify-center items-center gap-2">
            <h1 className="text-[18px] font-bold">Other Link</h1>
            {arr.map((ele) => {
              return (
                <Link className="flex gap-0.5 items-center text-[14px]">
                  <IoMdArrowDropright />
                  <h1>Coworking Space</h1>
                </Link>
              );
            })}
          </div>
          {/* Contact us */}
          <div className="flex flex-col w-[90%] justify-center items-center gap-2 col-span-2 md:col-span-1  ">
            <h1 className="text-[18px] font-bold">Contact Us</h1>
            <div className="flex flex-wrap gap-3  items-center justify-center md:justify-evenly md:flex-col md:h-48">
              {contact.map((ele) => {
                return (
                  <div className="flex gap-2 items-center ">
                    <IoMdContact className="text-2xl" />
                    <h1 className="text-[16px]">03203981965</h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="h-1 w-full bg-linear-to-br from-blue-500 to-green-500"></div>
        <div className="w-full h-fit justify-center items-center flex flex-col">
          <h1 className="text-center">
            © Career Institute Pvt. Ltd. All rights reserved.
          </h1>
          <div
            className="flex justify-evenly items-center w-full mt-3
          "
          >
            {socialLinks.map((ele) => {
              return (
                <div className="w-7 h-7">
                  <img src={ele.url} alt="" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterMain;
