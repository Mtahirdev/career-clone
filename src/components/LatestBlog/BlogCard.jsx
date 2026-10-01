import React from "react";

const BlogCard = () => {
  return (
    <>
      <div className="bg-white w-[90%] h-100 gap-3 flex flex-col justify-center items-center rounded-2xl">
        <div className="w-full h-40">
          <img
            className="rounded-2xl w-full h-full"
            src="https://career.edu.pk/blog-image/10?v=3f55eb1192b5"
            alt=""
          />
        </div>
        <h1 className="font-bold w-[98%] text-center">
          Best Freelancing Skills for Pakistani Students in 2026
        </h1>
        <p className="text-[#595959] w-[90%] text-center">
          Not sure which freelancing skill to learn in 2026? This practical
          guide breaks down useful skills Pakistani students can learn,
          practice, and turn into real freelance services.
        </p>
      </div>
    </>
  );
};

export default BlogCard;
