import React from "react";

const ButtonContainer = ({ toggle, settoggle }) => {
  return (
    <>
      <div className="flex w-full h-10 text-2xl lg:text-3xl justify-evenly items-center mt-7">
        <button
          className={`${toggle == "News" ? "underline underline-offset-6" : ""}md:underline`}
          onClick={() => settoggle("News")}
        >
          News
        </button>
        <button
          className={`${toggle == "News" ? "" : "underline underline-offset-6"}md:underline`}
          onClick={() => settoggle("Events")}
        >
          Events
        </button>
        <button
          className={`${toggle == "News" ? "" : "underline underline-offset-6"}md:underline hidden lg:block`}
          onClick={() => settoggle("Events")}
        >
          <h1 className="text-2xl lg:text-3xl  ml-5 font-bold pt-1.5">
            <span className="text-[#00a1b3]">Why</span> Choose us
          </h1>
        </button>
      </div>
    </>
  );
};

export default ButtonContainer;
