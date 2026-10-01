import React, { useState } from "react";
import {
  IoSearchOutline,
  IoLocationOutline,
  IoBriefcaseOutline,
} from "react-icons/io5";

const JobsMain = () => {
  const [keyword, setKeyword] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");

  const jobs = [
    {
      title: "Digital Marketing Instructor",
      posted: "20-09-2026",
      type: "Full Time",
      location: "Faisalabad",
      deadline: "30-09-2026",
    },
    {
      title: "AI & Machine Learning Instructor",
      posted: "20-09-2026",
      type: "Full Time",
      location: "Faisalabad",
      deadline: "30-09-2026",
    },
    {
      title: "Web development",
      posted: "20-09-2026",
      type: "Full Time",
      location: "Faisalabad",
      deadline: "30-09-2026",
    },
  ];

  const categories = [
    {
      title: "Education & Training",
      icon: IoBriefcaseOutline,
    },
    {
      title: "Information Technology",
      icon: IoBriefcaseOutline,
    },
    {
      title: "Business & Management",
      icon: IoBriefcaseOutline,
    },
    {
      title: "Digital Skills",
      icon: IoBriefcaseOutline,
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const keywordMatch = job.title
      .toLowerCase()
      .includes(keyword.toLowerCase());

    const typeMatch =
      jobType === "" || job.type.toLowerCase() === jobType.toLowerCase();

    const locationMatch =
      location === "" ||
      job.location.toLowerCase().includes(location.toLowerCase());

    return keywordMatch && typeMatch && locationMatch;
  });

  const handleSearch = () => {};

  return (
    <section className="w-full bg-white py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-[92%] max-w-[1115px]">
        {/* ================= HEADING ================= */}
        <div className="flex items-center justify-center gap-2">
          <IoSearchOutline className="text-4xl sm:text-5xl text-[#00bd91]" />

          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Find Jobs
          </h2>
        </div>

        {/* ================= SEARCH AREA ================= */}
        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center">
          {/* Job Count */}
          <div className="flex h-[52px] shrink-0 items-center justify-center rounded-xl bg-[#f1f1f1] px-5 text-base sm:text-lg">
            <span>{filteredJobs.length}</span>
            <span className="ml-1">Show</span>
          </div>

          {/* Keyword */}
          <div className="relative w-full">
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Search Keyword..."
              className="
                h-[52px]
                w-full
                rounded-xl
                border
                border-[#d5d5d5]
                bg-white
                px-4
                text-sm
                text-[#555]
                outline-none
                transition
                focus:border-[#00bd91]
                focus:ring-1
                focus:ring-[#00bd91]
              "
            />
          </div>

          {/* Job Type */}
          <div className="relative w-full">
            <select
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              className="
                h-[52px]
                w-full
                appearance-none
                rounded-xl
                border
                border-[#d5d5d5]
                bg-white
                px-4
                text-sm
                text-[#555]
                outline-none
                transition
                focus:border-[#00bd91]
                focus:ring-1
                focus:ring-[#00bd91]
              "
            >
              <option value="">Job Type...</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Internship">Internship</option>
            </select>
          </div>

          {/* Location */}
          <div className="relative w-full">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Search Location"
              className="
                h-[52px]
                w-full
                rounded-xl
                border
                border-[#d5d5d5]
                bg-white
                px-4
                text-sm
                text-[#555]
                outline-none
                transition
                focus:border-[#00bd91]
                focus:ring-1
                focus:ring-[#00bd91]
              "
            />
          </div>

          {/* Search Button */}
          <button
            onClick={handleSearch}
            className="flex h-13 w-full shrink-0 items-center justify-center rounded-xl bg-[#00b995] text-2xl text-white transition-all duration-300 hover:bg-[#00a985] hover:shadow-lg lg:w-18
            "
          >
            <IoSearchOutline />
          </button>
        </div>

        {/* ================= JOBS ================= */}
        <div className="mt-6 w-full">
          {/* ================= DESKTOP TABLE ================= */}
          <div className="hidden md:block w-full">
            {/* Header */}
            <div className="grid grid-cols-6 gap-4 items-center bg-[#f8f8f8] border border-[#dedede] px-5 py-4">
              <p className="font-semibold text-sm lg:text-base">Job Title</p>

              <p className="font-semibold text-sm lg:text-base">
                Job Posted on
              </p>

              <p className="font-semibold text-sm lg:text-base">Type</p>

              <p className="font-semibold text-sm lg:text-base">Location</p>

              <p className="font-semibold text-sm lg:text-base">Dead Line</p>

              <p className="font-semibold text-sm lg:text-base">Action</p>
            </div>

            {/* Rows */}
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="
            grid
            grid-cols-6
            gap-4
            items-center
            border-x
            border-b
            border-[#dedede]
            px-5
            py-3
          "
                >
                  {/* Job title */}
                  <p className="text-sm lg:text-base text-[#666]">
                    {job.title}
                  </p>

                  {/* Posted */}
                  <p className="text-sm lg:text-base text-[#666]">
                    {job.posted}
                  </p>

                  {/* Type */}
                  <div>
                    <span className="inline-flex rounded-xl bg-[#e5fff6] px-4 py-2 text-xs text-[#00b98a]">
                      {job.type}
                    </span>
                  </div>

                  {/* Location */}
                  <p className="text-sm lg:text-base text-[#666]">
                    {job.location}
                  </p>

                  {/* Deadline */}
                  <p className="text-sm lg:text-base text-[#666]">
                    {job.deadline}
                  </p>

                  {/* Action */}
                  <div>
                    <button
                      disabled
                      className="
                rounded-md
                bg-gradient-to-r
                from-[#65c5d6]
                to-[#69dcb0]
                px-4
                py-2.5
                text-xs
                text-white
                whitespace-nowrap
                cursor-not-allowed
              "
                    >
                      Apply Unavailable
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="border-x border-b border-[#dedede] py-10 text-center text-[#777]">
                No jobs found.
              </div>
            )}
          </div>

          {/* ================= MOBILE JOB CARDS ================= */}
          <div className="md:hidden flex flex-col gap-4">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="
            w-full
            rounded-xl
            border
            border-[#dedede]
            bg-white
            p-4
            shadow-sm
          "
                >
                  {/* Job title */}
                  <div className="pb-3 border-b border-[#eeeeee]">
                    <p className="text-xs text-[#888]">Job Title</p>

                    <h3 className="mt-1 text-base font-semibold text-[#333]">
                      {job.title}
                    </h3>
                  </div>

                  {/* Job information */}
                  <div className="grid grid-cols-2 gap-x-4 gap-y-4 py-4">
                    {/* Posted */}
                    <div>
                      <p className="text-xs text-[#888]">Job Posted on</p>

                      <p className="mt-1 text-sm text-[#555]">{job.posted}</p>
                    </div>

                    {/* Type */}
                    <div>
                      <p className="text-xs text-[#888]">Type</p>

                      <span className="mt-1 inline-flex rounded-xl bg-[#e5fff6] px-3 py-1.5 text-xs text-[#00b98a]">
                        {job.type}
                      </span>
                    </div>

                    {/* Location */}
                    <div>
                      <p className="text-xs text-[#888]">Location</p>

                      <p className="mt-1 text-sm text-[#555]">{job.location}</p>
                    </div>

                    {/* Deadline */}
                    <div>
                      <p className="text-xs text-[#888]">Dead Line</p>

                      <p className="mt-1 text-sm text-[#555]">{job.deadline}</p>
                    </div>
                  </div>

                  {/* Action */}
                  <div className="border-t border-[#eeeeee] pt-3">
                    <button
                      disabled
                      className="
                w-full
                rounded-md
                bg-gradient-to-r
                from-[#65c5d6]
                to-[#69dcb0]
                px-4
                py-2.5
                text-sm
                text-white
                cursor-not-allowed
              "
                    >
                      Apply Unavailable
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-[#dedede] py-10 text-center text-[#777]">
                No jobs found.
              </div>
            )}
          </div>
        </div>

        {/* ================= CATEGORIES ================= */}
        <div className="mt-14 sm:mt-16 md:mt-20">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            Explore Job Categories
          </h2>

          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const Icon = category.icon;

              return (
                <div
                  key={index}
                  className="
                    flex
                    h-48
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    bg-gradient-to-r
                    from-[#08a9bb]
                    to-[#00c58b]
                    px-5
                    text-center
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <Icon className="text-6xl text-white" />

                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobsMain;
