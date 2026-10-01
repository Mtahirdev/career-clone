import React from "react";
import NewsBoxCard from "./NewsBoxCard.jsx";
import { Link } from "react-router-dom";

const NewsBox = ({ toggle }) => {
  return (
    <>
      {/* {toggle == true ? (
        <div className="flex gap-5 items-center">
          <h1>Latest News</h1>
          <Link className="text-blue-300 underline">view all news</Link>
        </div>
      ) : (
        ""
      )} */}
      <div
        className={`w-[90%]  overflow-hidden ${toggle == true ? "h-70 " : "h-[498px]"} `}
      >
        <div className="animate-infinite-scroll flex flex-col gap-5 items-center">
          <div className="flex flex-col gap-5 items-center">
            <NewsBoxCard />
            <NewsBoxCard />
            <NewsBoxCard />
            <NewsBoxCard />
            <NewsBoxCard />
            <NewsBoxCard />
            <NewsBoxCard />
          </div>

          <div className="flex flex-col gap-5 items-center">
            <NewsBoxCard />
            <NewsBoxCard />
            <NewsBoxCard />
            <NewsBoxCard />
            <NewsBoxCard />
            <NewsBoxCard />
            <NewsBoxCard />
          </div>
        </div>
      </div>
      <button className="hover:scale-110 py-2 px-4 text-white font-bold bg-linear-to-br from-blue-500 to-green-500 rounded-3xl ml-20 mt-6 justify-self-center self-center">
        Read More
      </button>
    </>
  );
};

export default NewsBox;
