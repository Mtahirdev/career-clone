import React from "react";
import EventBoxCard from "./EventBoxCard.jsx";

const EventBox = () => {
  return (
    <>
      <div className="w-[90%] h-[498px] overflow-scroll scrollbar-none">
        {/* Moving container */}
        <div className=" flex flex-col gap-5">
          {/* First set */}
          <div className="flex flex-col items-center gap-5">
            <EventBoxCard />
            <EventBoxCard />
            <EventBoxCard />
            <EventBoxCard />
            <EventBoxCard />
          </div>

          {/* Duplicate set */}
          <div className="flex flex-col items-center gap-5">
            <EventBoxCard />
            <EventBoxCard />
            <EventBoxCard />
            <EventBoxCard />
            <EventBoxCard />
          </div>
        </div>
      </div>
      <button className="hover:scale-110 py-2 px-4 bg-linear-to-br text-white font-bold from-blue-500 to-green-500 rounded-3xl ml-10 mt-6">
        All Event
      </button>
    </>
  );
};

export default EventBox;
