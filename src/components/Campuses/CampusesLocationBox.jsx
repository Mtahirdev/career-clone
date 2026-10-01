import React, { useState } from "react";

const CampusesLocationBox = ({ seturl }) => {
  let arr = [
    {
      heading: "Career Institute - Jinnah Colony Branch",
      text: "2nd Floor, Fazal Heights, P-176, near GCU Road, Jinnah Colony, Faisalabad, Pakistan",
      icon: "https://career.edu.pk/assets/images/icon24.svg",
      number: "0314-4444010",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.9558479662937!2d73.09418097469306!3d31.446387050795256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922696ac9459bed%3A0x4d837d0ef403530e!2sCareer%20Institute%20-%20Millat%20Chowk%20Branch%20Faisalabad!5e1!3m2!1sen!2s!4v1790661386844!5m2!1sen!2s",
    },
    {
      heading: "Career Institute - Jinnah Colony Branch",
      text: "2nd Floor, Fazal Heights, P-176, near GCU Road, Jinnah Colony, Faisalabad, Pakistan",
      icon: "https://career.edu.pk/assets/images/icon24.svg",
      number: "0314-4444010",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.9558479662937!2d73.09418097469306!3d31.446387050795256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922699149707c49%3A0x789ee5366b7bf9a5!2sWhites%20Castle%20Pizza%20Millat%20Chowk!5e1!3m2!1sen!2s!4v1790661884340!5m2!1sen!2s",
    },
    {
      heading: "Career Institute - Jinnah Colony Branch",
      text: "2nd Floor, Fazal Heights, P-176, near GCU Road, Jinnah Colony, Faisalabad, Pakistan",
      icon: "https://career.edu.pk/assets/images/icon24.svg",
      number: "0314-4444010",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.9558479662937!2d73.09418097469306!3d31.446387050795256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922696ac9459bed%3A0x4d837d0ef403530e!2sCareer%20Institute%20-%20Millat%20Chowk%20Branch%20Faisalabad!5e1!3m2!1sen!2s!4v1790661386844!5m2!1sen!2s",
    },
    {
      heading: "Career Institute - Jinnah Colony Branch",
      text: "2nd Floor, Fazal Heights, P-176, near GCU Road, Jinnah Colony, Faisalabad, Pakistan",
      icon: "https://career.edu.pk/assets/images/icon24.svg",
      number: "0314-4444010",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.9558479662937!2d73.09418097469306!3d31.446387050795256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922696ac9459bed%3A0x4d837d0ef403530e!2sCareer%20Institute%20-%20Millat%20Chowk%20Branch%20Faisalabad!5e1!3m2!1sen!2s!4v1790661386844!5m2!1sen!2s",
    },
    {
      heading: "Career Institute - Jinnah Colony Branch",
      text: "2nd Floor, Fazal Heights, P-176, near GCU Road, Jinnah Colony, Faisalabad, Pakistan",
      icon: "https://career.edu.pk/assets/images/icon24.svg",
      number: "0314-4444010",
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2840.9558479662937!2d73.09418097469306!3d31.446387050795256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922696ac9459bed%3A0x4d837d0ef403530e!2sCareer%20Institute%20-%20Millat%20Chowk%20Branch%20Faisalabad!5e1!3m2!1sen!2s!4v1790661386844!5m2!1sen!2s",
    },
  ];
  let [indexnum, setindexnum] = useState(localStorage.getItem("boxIndex") || 0);

  let fun = (index) => {
    let data = localStorage.setItem("boxIndex", index);
    setindexnum(index);
    console.log(arr[index].location);

    seturl(arr[index].location);
  };
  return (
    <>
      <div className="w-full h-fit flex flex-col justify-center items-center gap-5">
        {arr.map((ele, index) => {
          let active = indexnum == index;
          return (
            <>
              <div
                className={`rounded-2xl w-[90%] h-fit flex justify-center  bg-linear-to-br from-[#009db81a] to-[#03c5871a] pb-3  ${active == true ? "border-2 border-[#00b8a9]" : ""}`}
                onClick={() => fun(index)}
              >
                <div className="w-[15%] ml-5 mt-2 ">
                  <img className="w-8 h-8" src={ele.icon} alt="" />
                </div>
                <div className="w-[85%]">
                  <h1 className="w-[90%] md:text-2xl  font-bold text-[#343A46]">
                    {ele.heading}
                  </h1>
                  <h2 className="text-[#000000] text-[13px]">{ele.text}</h2>
                  <h3 className="text-[#000000] text-[13px]">{ele.number}</h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CampusesLocationBox;
