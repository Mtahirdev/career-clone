import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

const faqs = [
  {
    question: "What courses and certifications do you offer?",
    answer:
      "We offer practical IT, freelancing, business, language, design, and certification-focused programs for students, professionals, and job seekers.",
  },
  {
    question: "How do I apply for a course?",
    answer:
      "You can apply for a course by selecting your desired program and completing the registration process. Our team will contact you with the next steps.",
  },
  {
    question: "Can I use the coworking space if I am not a student?",
    answer:
      "Yes. Our coworking facilities are available to students, freelancers, professionals, and other individuals who need a productive workspace.",
  },
  {
    question: "Do you offer online classes?",
    answer:
      "Yes, selected courses are available online so you can learn from anywhere with flexible access to course materials and instructors.",
  },
  {
    question: "Do you provide certificates after completing a course?",
    answer:
      "Yes. Students who successfully complete eligible programs can receive a certificate of completion.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-[#f3fbff] py-12 sm:py-16 md:py-20 mt-10">
      <div className="mx-auto w-[92%] max-w-6xl">
        <div className="text-center">
          <p className="text-base sm:text-lg md:text-xl font-semibold text-[#00c58a]">
            Do You Need Help?
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
            Frequently Asked
            <br />
            <span className="text-[#009fc5]">Questions</span>
          </h2>
        </div>

        <div className="mx-auto mt-8 sm:mt-10 md:mt-12 w-full max-w-4xl">
          {faqs.map((faq, index) => {
            let isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-[#c8d1d5]">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 sm:py-6 text-left"
                >
                  <span className="text-base sm:text-lg md:text-xl font-bold leading-snug text-[#111111]">
                    {faq.question}
                  </span>

                  <span
                    className={`
                      flex h-7 w-7 sm:h-8 sm:w-8 shrink-0
                      items-center justify-center
                      rounded-full
                      border-2
                      transition-all duration-300
                      ${
                        isOpen
                          ? "border-[#222] text-[#222]"
                          : "border-[#222] text-[#222]"
                      }
                    `}
                  >
                    {isOpen ? (
                      <IoRemove className="text-lg sm:text-xl" />
                    ) : (
                      <IoAdd className="text-lg sm:text-xl" />
                    )}
                  </span>
                </button>

                <div
                  className={`
                    grid transition-all duration-500 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 sm:pb-6 pr-8 text-sm sm:text-base md:text-lg leading-relaxed text-[#747474]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
