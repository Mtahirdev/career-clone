import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const OnlineAdmissionForm = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/70 px-4 py-5 sm:px-6 md:py-8">
      <div className="relative flex max-h-[95vh] w-full max-w-121.25 flex-col overflow-hidden rounded-2xl bg-white shadow-2xl sm:max-h-[92vh]">
        {/* Header */}
        <div className="relative flex min-h-15 items-center justify-center bg-linear-to-r from-[#09a8c1] to-[#00c389] px-12 py-4 sm:min-h-[62px]">
          <h2 className="text-center text-xl font-semibold text-white sm:text-2xl">
            Start Your Learning Journey
          </h2>
          <Link to="/">
            <button
              type="button"
              aria-label="Close modal"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-2xl text-white transition duration-200 hover:bg-white/20 sm:right-4"
            >
              <IoClose />
            </button>
          </Link>
        </div>

        {/* Form */}
        <form className="flex-1 overflow-y-auto px-5 py-5 sm:px-6 sm:py-6">
          {/* Full Name */}
          <div className="mb-3">
            <label
              htmlFor="fullName"
              className="mb-2 block text-sm font-medium text-[#333333] sm:text-base"
            >
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Enter Your Full Name"
              required
              className="h-10.5 w-full rounded-sm border border-gray-300 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition focus:border-[#08aebd] focus:ring-1 focus:ring-[#08aebd] sm:h-[43px] sm:text-sm"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-3">
            <label
              htmlFor="contactNumber"
              className="mb-2 block text-sm font-medium text-[#333333] sm:text-base"
            >
              Contact Number
            </label>

            <input
              id="contactNumber"
              name="contactNumber"
              type="tel"
              placeholder="Enter Your Contact Number"
              required
              className="h-10.5 w-full rounded-sm border border-gray-300 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition focus:border-[#08aebd] focus:ring-1 focus:ring-[#08aebd] sm:h-[43px] sm:text-sm"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-[#333333] sm:text-base"
            >
              Email Address
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email Address"
              required
              className="h-10.5 w-full rounded-sm border border-gray-300 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition focus:border-[#08aebd] focus:ring-1 focus:ring-[#08aebd] sm:h-[43px] sm:text-sm"
            />
          </div>

          {/* Course */}
          <div className="mb-3">
            <label
              htmlFor="course"
              className="mb-2 block text-sm font-medium text-[#333333] sm:text-base"
            >
              Interested Course or Certification
            </label>

            <input
              id="course"
              name="course"
              type="text"
              placeholder="Enter a Course or Certification of Your Interest"
              required
              className="h-10.5 w-full rounded-sm border border-gray-300 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition focus:border-[#08aebd] focus:ring-1 focus:ring-[#08aebd] sm:h-[43px] sm:text-sm"
            />
          </div>

          {/* City */}
          <div className="mb-3">
            <label
              htmlFor="city"
              className="mb-2 block text-sm font-medium text-[#333333] sm:text-base"
            >
              City of Residence
            </label>

            <input
              id="city"
              name="city"
              type="text"
              placeholder="Enter Your City of Residence"
              required
              className="h-10.5 w-full rounded-sm border border-gray-300 bg-gray-50 px-3 text-sm text-gray-700 outline-none transition focus:border-[#08aebd] focus:ring-1 focus:ring-[#08aebd] sm:h-[43px] sm:text-sm"
            />
          </div>

          {/* Additional Information */}
          <div className="mb-5">
            <label
              htmlFor="additionalInfo"
              className="mb-2 block text-sm font-medium text-[#333333] sm:text-base"
            >
              Additional Information{" "}
              <span className="font-normal">(Optional)</span>
            </label>

            <textarea
              id="additionalInfo"
              name="additionalInfo"
              placeholder="Enter Any Additional Information or Questions"
              rows={1}
              className="h-10.5 w-full resize-none rounded-sm border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-700 outline-none transition focus:border-[#08aebd] focus:ring-1 focus:ring-[#08aebd] sm:min-h-[43px] sm:text-sm"
            />
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-full bg-linear-to-r from-[#09a8c1] to-[#00c389] px-7 py-2.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:scale-105 hover:shadow-lg active:scale-95 sm:px-8 sm:py-2.5 sm:text-base"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OnlineAdmissionForm;
