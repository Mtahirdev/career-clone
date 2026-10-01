import React, { useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Form } from "react-router-dom";
import FeaturedCoursesCard from "../FeaturedCourses/FeaturedCoursesCard";
import * as ReactPaginateModule from "react-paginate";
import ProgramCoursesCard from "./ProgramCourseCard";

const ProgramPagination = () => {
  const ReactPaginate = ReactPaginateModule.default.default;

  const arr = [
    {
      id: 1,
      heading: "Shopify eCommerce",
      category: "Digital Marketing & Ecommerce",
      duration: "8 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 2,
      heading: "Digital Marketing",
      category: "Digital Marketing & Ecommerce",
      duration: "8 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 3,
      heading: "SEO & Search Marketing",
      category: "Digital Marketing & Ecommerce",
      duration: "6 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 4,
      heading: "Social Media Marketing",
      category: "Digital Marketing & Ecommerce",
      duration: "6 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 5,
      heading: "Google Ads & PPC",
      category: "Digital Marketing & Ecommerce",
      duration: "4 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 6,
      heading: "Content Marketing",
      category: "Digital Marketing & Ecommerce",
      duration: "6 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 7,
      heading: "Ecommerce Management",
      category: "Digital Marketing & Ecommerce",
      duration: "8 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 8,
      heading: "Full Stack Web Development",
      category: "Web Development",
      duration: "16 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 9,
      heading: "Frontend Development",
      category: "Web Development",
      duration: "12 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 10,
      heading: "React JS Development",
      category: "Web Development",
      duration: "10 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 11,
      heading: "Backend Development",
      category: "Web Development",
      duration: "12 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 12,
      heading: "JavaScript Programming",
      category: "Web Development",
      duration: "8 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 13,
      heading: "WordPress Development",
      category: "Web Development",
      duration: "6 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 14,
      heading: "Next.js Development",
      category: "Web Development",
      duration: "8 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 15,
      heading: "AI & Data Science",
      category: "AI & Data Science",
      duration: "16 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 16,
      heading: "Machine Learning",
      category: "AI & Data Science",
      duration: "14 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 17,
      heading: "Data Analytics",
      category: "AI & Data Science",
      duration: "10 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 18,
      heading: "Python for Data Science",
      category: "AI & Data Science",
      duration: "10 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 19,
      heading: "Deep Learning",
      category: "AI & Data Science",
      duration: "12 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 20,
      heading: "Artificial Intelligence",
      category: "AI & Data Science",
      duration: "16 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 21,
      heading: "Power BI & Data Visualization",
      category: "AI & Data Science",
      duration: "8 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 22,
      heading: "Cyber Security",
      category: "Cyber Security",
      duration: "14 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 23,
      heading: "Ethical Hacking",
      category: "Cyber Security",
      duration: "12 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 24,
      heading: "Network Security",
      category: "Cyber Security",
      duration: "10 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 25,
      heading: "Penetration Testing",
      category: "Cyber Security",
      duration: "12 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 26,
      heading: "Cloud Security",
      category: "Cyber Security",
      duration: "8 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 27,
      heading: "Digital Forensics",
      category: "Cyber Security",
      duration: "8 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 28,
      heading: "Graphic Designing",
      category: "Design & Creative",
      duration: "10 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 29,
      heading: "UI/UX Design",
      category: "Design & Creative",
      duration: "8 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 30,
      heading: "Adobe Photoshop",
      category: "Design & Creative",
      duration: "6 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 31,
      heading: "Adobe Illustrator",
      category: "Design & Creative",
      duration: "6 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 32,
      heading: "Motion Graphics",
      category: "Design & Creative",
      duration: "8 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 33,
      heading: "Video Editing",
      category: "Design & Creative",
      duration: "8 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 34,
      heading: "3D Modeling & Animation",
      category: "Design & Creative",
      duration: "12 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 35,
      heading: "Amazon Virtual Assistant",
      category: "Freelancing & Entrepreneurship",
      duration: "8 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 36,
      heading: "Freelancing Masterclass",
      category: "Freelancing & Entrepreneurship",
      duration: "6 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 37,
      heading: "Upwork Freelancing",
      category: "Freelancing & Entrepreneurship",
      duration: "4 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 38,
      heading: "Fiverr Freelancing",
      category: "Freelancing & Entrepreneurship",
      duration: "4 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 39,
      heading: "Entrepreneurship",
      category: "Freelancing & Entrepreneurship",
      duration: "6 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 40,
      heading: "Business Management",
      category: "Business & Management",
      duration: "8 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 41,
      heading: "Project Management",
      category: "Business & Management",
      duration: "8 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    },

    {
      id: 42,
      heading: "Cloud Computing",
      category: "Cloud & DevOps",
      duration: "12 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 43,
      heading: "AWS Cloud Practitioner",
      category: "Cloud & DevOps",
      duration: "8 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 44,
      heading: "Microsoft Azure",
      category: "Cloud & DevOps",
      duration: "8 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1560732488-7b5a6b6e7a4f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 45,
      heading: "DevOps Engineering",
      category: "Cloud & DevOps",
      duration: "12 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 46,
      heading: "Linux Administration",
      category: "IT & Networking",
      duration: "8 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 47,
      heading: "Networking Essentials",
      category: "IT & Networking",
      duration: "8 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 48,
      heading: "Python Programming",
      category: "Programming",
      duration: "10 Weeks",
      mode: "On-Campus",
      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 49,
      heading: "Java Programming",
      category: "Programming",
      duration: "10 Weeks",
      mode: "Online",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    },
  ];
  const [page, setPage] = useState(0);

  const coursesPerPage = 8;
  const start = page * coursesPerPage;

  const currentCourses = arr.slice(start, start + coursesPerPage);
  let Formref = useRef(null);
  let option = ["", "", "", "", "", "", "", "", "", ""];
  let optionT = [""];
  let optionD = ["", "", "", "", "", ""];

  let reset = () => {
    Formref.current.reset();
  };
  return (
    <>
      <div className="w-full h-fit flex justify-center items-center flex-col lg:flex-row gap-5">
        <div className="w-[95%] lg:w-[40%]  rounded-2xl h-fit flex">
          <Form
            className="flex flex-col w-full h-fit justify-center items-center pb-5"
            ref={Formref}
          >
            <h1 className="text-2xl font-bold md:text-3xl  ">Search Courses</h1>
            <div className="w-full justify-center  flex h-10 mt-3">
              <input
                type="text"
                className="w-[80%] h-10 border border-gray-500 border-r-0 rounded-tl-2xl rounded-bl-2xl  "
              />
              <button className="w-[10%] h-10 border border-gray-500 border-l-0 rounded-tr-2xl rounded-br-2xl ">
                <CiSearch />
              </button>
            </div>
            <div className="w-[90%] h-fit flex justify-between items-center mt-5 ">
              <h1 className=" font-bold text-[20px]">Category</h1>
              <button
                onClick={reset}
                className="bg-red-500 px-5 py-1 rounded-2xl text-white mt-1"
              >
                Clear All
              </button>
            </div>
            <div className="bg-gray-500 h-0.5 w-[90%]  mt-2 "></div>
            <div className="flex flex-col gap-3 mt-3 w-[90%]">
              {option.map((ele) => {
                return (
                  <div className="flex items-center justify-center gap-2 text-[#595959] self-start">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      value="Ai & Data Science"
                    />
                    <label htmlFor="" className="">
                      AI & Data Science
                    </label>
                  </div>
                );
              })}
            </div>
            <div className="w-[90%] h-fit flex justify-between items-center mt-5 ">
              <h1 className=" font-bold text-[20px]">Teaching Method</h1>
            </div>
            <div className="bg-gray-500 h-0.5 w-[90%]  mt-2 "></div>
            <div className="flex flex-col gap-3 mt-3 w-[90%]">
              {optionT.map((ele) => {
                return (
                  <div className="flex items-center justify-center gap-2 text-[#595959] self-start">
                    <input type="checkbox" name="" id="" value="On Campus" />
                    <label htmlFor="" className="">
                      On Campus
                    </label>
                  </div>
                );
              })}
            </div>
            {/* duration */}
            <div className="w-[90%] h-fit flex justify-between items-center mt-5 ">
              <h1 className=" font-bold text-[20px]">Duration</h1>
            </div>
            <div className="bg-gray-500 h-0.5 w-[90%]  mt-2 "></div>
            <div className="flex flex-col gap-3 mt-3 w-[90%]">
              {optionD.map((ele) => {
                return (
                  <div className="flex items-center justify-center gap-2 text-[#595959] self-start">
                    <input type="checkbox" name="" id="" value="On Campus" />
                    <label htmlFor="" className="">
                      1 - 3 Month
                    </label>
                  </div>
                );
              })}
            </div>
          </Form>
        </div>
        {/* Grid */}
        <div className="w-[95%] lg:w-[60%]  pt-3 pb-3  rounded-2xl h-226 grid grid-cols-1 md:grid-cols-2 overflow-scroll gap-5 ">
          {currentCourses.map((ele) => {
            return (
              <div className="flex justify-center w-full">
                <ProgramCoursesCard
                  heading={ele.heading}
                  category={ele.category}
                  duration={ele.duration}
                  mode={ele.mode}
                  img={ele.img}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-center mt-5 mb-5">
        <ReactPaginate
          pageCount={Math.ceil(arr.length / coursesPerPage)}
          onPageChange={(event) => setPage(event.selected)}
          previousLabel="←"
          nextLabel="→"
          containerClassName="flex flex-wrap justify-center items-center gap-2"
          pageClassName="px-3 py-2 border rounded-md"
          previousClassName="px-3 py-2 border rounded-md"
          nextClassName="px-3 py-2 border rounded-md"
          activeClassName="bg-blue-500 text-white"
        />
      </div>
    </>
  );
};

export default ProgramPagination;
