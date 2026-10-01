import React from "react";
import { Link } from "react-router-dom";

const UpgradeSkillsBanner = () => {
  return (
    <section className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-0">
      <div
        className="
          relative
          mx-auto
          flex
          min-h-[300px]
          w-full
          max-w-[1115px]
          items-center
          overflow-hidden
          rounded-[30px]
          bg-cover
          bg-center
          bg-no-repeat
          sm:min-h-[280px]
          md:min-h-[260px]
          lg:min-h-[185px]
        "
        style={{
          backgroundImage:
            'url("https://career.edu.pk/assets/images/banner23.png")',
        }}
      >
        {/* Dark / Green Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00485b]/95 via-[#00766f]/90 to-[#00a879]/65" />

        {/* Content */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-6
            px-6
            py-8
            text-center
            sm:px-10
            md:flex-row
            md:justify-between
            md:gap-8
            md:text-left
            lg:px-20
            lg:py-6
          "
        >
          {/* Left Content */}
          <div className="max-w-[500px]">
            <h2
              className="
                text-2xl
                font-bold
                leading-tight
                text-white
                sm:text-3xl
                md:text-3xl
                lg:text-[27px]
              "
            >
              Ready to Upgrade Your Skills?
            </h2>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-white
                sm:text-base
                md:text-base
                lg:text-[16px]
              "
            >
              Join our professional courses and certifications and
              <br className="hidden md:block" />
              take the next step towards a successful career.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="
              flex
              w-full
              flex-col
              gap-3
              sm:w-auto
              sm:flex-row
              md:flex-col
              md:min-w-[198px]
            "
          >
            <Link
              to="/contact"
              className="
                flex
                h-12
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-[#04aeca]
                to-[#00c986]
                px-8
                text-sm
                font-bold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:shadow-lg
                sm:min-w-[198px]
              "
            >
              Get Started
            </Link>

            <Link
              to="/courses"
              className="
                flex
                h-12
                items-center
                justify-center
                rounded-full
                bg-white
                px-8
                text-sm
                font-bold
                text-black
                shadow-md
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:bg-gray-100
                sm:min-w-[198px]
              "
            >
              Explore All Courses
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpgradeSkillsBanner;
