import React, { useEffect, useState } from "react";
import TopNav from "../components/Navbar/TopNav.jsx";
import LowerNav from "../components/Navbar/LowerNav.jsx";
import NavSideBar from "../components/Navbar/NavSideBar.jsx";
import Main from "../components/Banner/Main.jsx";
import MainNewsandEvent from "../components/NewsandEvents/MainNewsandEvent.jsx";
import HeroMain from "../components/Hero/HeroMain.jsx";
import FeaturedCoursesMain from "../components/FeaturedCourses/FeaturedCoursesMain.jsx";
import CampusesMain from "../components/Campuses/CampusesMain.jsx";
import { RxCross1 } from "react-icons/rx";
import StudentSayMain from "../components/StudentsSay/StudentSayMain.jsx";
import AffliatedOrganizationMain from "../components/AffliatedOrganization/AffliatedOrganizationMain.jsx";
import LatestBlogMain from "../components/LatestBlog/LatestBlogMain.jsx";
import FAQ from "../components/FAQ/FAQ.jsx";
import BecomePartnerMain from "../components/BecomePartner/BecomePartnerMain.jsx";
import KeepInTouchMain from "../components/KeepInTouch/KeepInTouchMain.jsx";
import GalleryMain from "../components/Gallery/GalleryMain.jsx";
import JoinNewsLetterMain from "../components/JoinNewsLetter/JoinNewsLetterMain.jsx";
import FooterMain from "../components/Footer/FooterMain.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import OnlineAdmissionForm from "./OnlineAdmissionForm.jsx";

const OnlineAdmission = () => {
  let [toggle, settoggle] = useState(false);
  let [Iframe, setIframe] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log(Iframe);
  return (
    <>
      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
    fixed bottom-28 right-7 z-[100]
    w-12 h-12 md:w-14 md:h-14
    rounded-full
    bg-white
    text-gray-700
    shadow-lg
    border border-gray-200
    flex items-center justify-center
    transition-all duration-300
    hover:bg-gray-900
    hover:text-white
    hover:-translate-y-1
    ${
      showScrollTop
        ? "opacity-100 visible scale-100"
        : "opacity-0 invisible scale-75 pointer-events-none"
    }
  `}
      >
        <FaArrowUp className="text-lg md:text-xl" />
      </button>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923203981965?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-[100] group"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30"></span>

        {/* Button */}
        <span
          className="
      relative flex items-center justify-center
      w-14 h-14 md:w-16 md:h-16
      rounded-full
      bg-[#25D366]
      text-white
      shadow-[0_8px_25px_rgba(37,211,102,0.4)]
      transition-all duration-300
      group-hover:scale-110
      group-hover:shadow-[0_10px_35px_rgba(37,211,102,0.55)]
    "
        >
          <FaWhatsapp className="text-[30px] md:text-[34px]" />
        </span>

        {/* Tooltip */}
        <span
          className="
      absolute right-full mr-3 top-1/2 -translate-y-1/2
      whitespace-nowrap
      rounded-lg
      bg-gray-900
      px-3 py-2
      text-sm font-medium text-white
      opacity-0 invisible
      translate-x-2
      transition-all duration-300
      group-hover:opacity-100
      group-hover:visible
      group-hover:translate-x-0
    "
        >
          Chat with us
        </span>
      </a>
      <div
        className={`${toggle || Iframe == true ? "bg-black/50 fixed z-40 inset-0  h-screen lg:hidden w-screen" : ""} `}
      ></div>
      <div
        className={`${Iframe == true ? "w-full h-screen flex flex-col gap-3 justify-center items-center z-50 fixed " : "hidden"}`}
      >
        <iframe
          className="w-[90%] h-[90%] "
          src="https://www.youtube.com/embed/W3hfkCW1U-w?si=3huQG0V1U_UHldOL"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <button onClick={() => setIframe(!Iframe)} className="text-4xl">
          <RxCross1 />
        </button>
      </div>
      <div className="overflow-x-hidden">
        <div className="w-full h-fit z-100">
          <OnlineAdmissionForm isOpen={true}></OnlineAdmissionForm>
        </div>
        <TopNav></TopNav>
        <LowerNav settoggle={settoggle} toggle={toggle}></LowerNav>
        <NavSideBar toggle={toggle} settoggle={settoggle} />
        <Main></Main>
        <MainNewsandEvent></MainNewsandEvent>
        <HeroMain></HeroMain>
        <FeaturedCoursesMain></FeaturedCoursesMain>
        <CampusesMain Iframe={Iframe} setIframe={setIframe}></CampusesMain>
        <StudentSayMain></StudentSayMain>
        <AffliatedOrganizationMain></AffliatedOrganizationMain>
        <LatestBlogMain></LatestBlogMain>
        <BecomePartnerMain></BecomePartnerMain>
        <GalleryMain></GalleryMain>
        <KeepInTouchMain></KeepInTouchMain>
        <FAQ></FAQ>
        <JoinNewsLetterMain></JoinNewsLetterMain>
        <FooterMain></FooterMain>
      </div>
    </>
  );
};

export default OnlineAdmission;
