import React from "react";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://cdn.simpleicons.org/facebook/1877F2",
    link: "#",
  },
  {
    name: "Instagram",
    url: "https://cdn.simpleicons.org/instagram/E4405F",
    link: "#",
  },
  {
    name: "YouTube",
    url: "https://cdn.simpleicons.org/youtube/FF0000",
    link: "#",
  },
  {
    name: "TikTok",
    url: "https://cdn.simpleicons.org/tiktok/000000",
    link: "#",
  },
  {
    name: "LinkedIn",
    url: "https://career.edu.pk/assets/images/linkdin.png",
    link: "#",
  },
  {
    name: "X",
    url: "https://cdn.simpleicons.org/x/000000",
    link: "#",
  },
  {
    name: "WhatsApp",
    url: "https://cdn.simpleicons.org/whatsapp/25D366",
    link: "#",
  },
];

const KeepInTouchMain = () => {
  return (
    <div className="w-full bg-white py-10 sm:py-14 md:py-16 lg:py-20">
      <div className="mx-auto w-[92%] max-w-6xl">
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Keep in Touch
        </h2>

        {/* Social Cards */}
        <div
          className="
            mt-8
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-7
            gap-3
            sm:gap-4
            md:gap-5
            lg:gap-6
            justify-items-center
          "
        >
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.link}
              className="
                group flex aspect-square w-full max-w-[150px]
                items-center justify-center rounded-xl bg-white
                 shadow-[0_6px_20px_rgba(0,0,0,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.15)]
              "
            >
              <img
                src={social.url}
                alt={social.name}
                className="
                  h-14
                  w-14
                  sm:h-16
                  sm:w-16
                  md:h-18
                  md:w-18
                  lg:h-20
                  lg:w-20
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeepInTouchMain;
