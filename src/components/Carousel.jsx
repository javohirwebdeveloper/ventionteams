import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from "../ThemeContext.jsx";
import { HiMiniArrowUpRight } from "react-icons/hi2";
const Carousel = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSlide, setActiveSlide] = useState(0);
  const slideRef = useRef();
  const slides = [
    {
      title: "Engineering peace of mind",
      titleBg: "#FF6A47",
      text: "Vention developers partner with innovative companies from startups to Fortune 500s, lending the AI engineering expertise to propel them to new heights and the edge to outpace the competition.",
      buttonText: "Get an estimate",
      imageUrl:
        "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2Fhero_image_HP_5.jpg&w=1300&q=75",
      backgroundColor: "#f0f0f0",
      line: "#FF6A47",
      lightButtonBg: "#52002D",
      DarkButtonBg: "#FF977E",
    },
    {
      title: "International Invention Day",
      titleBg: "#FF6FFF",
      text: "On May 16, Vention kicks off International Invention Day, celebrating human creativity and game-changing inventions. Until June 30, you’ll also have a chance to join the In:Vention Incubator and win 12 weeks of our top-tier services worth $150K USD in in-house software development.",
      buttonText: "Enter the contest",
      imageUrl:
        "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2FInvention-day_05.jpg&w=1300&q=75",
      backgroundColor: "#f0f0f0",
      lightButtonBg: "#39175B",
      DarkButtonBg: "#FF9AFF",
    },
    {
      title: "AI innovation",
      titleBg: "#FF6A47",
      text: "As pioneers in AI engineering, we view it as more than a shiny tool: it`s a pillar of the new business normal. Those companies that embrace and leverage AI will set the standard and lead in their category. In our new State of AI report, we look at funding, investment, and valuation trends across the AI market.",
      buttonText: "Read the report",
      imageUrl:
        "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2FThe_State_of_AI_03-2.jpg&w=1300&q=75",
      backgroundColor: "#f0f0f0",
      line: "#FF6A47",
      lightButtonBg: "#52002D",
      DarkButtonBg: "#FF977E",
    },
    {
      title: "Expert software development",
      titleBg: "#3155FF",
      text: "Get it done right — the first time. Our proven software expertise and engagement flexibility mean you don’t have to worry about timelines, processes, or outcomes. Proficient in web, mobile, cloud, and advanced tech like AI and VR, we empower you to innovate and grow your business at the scale and speed of future trends.",
      buttonText: "Schedule a call",
      imageUrl:
        "https://ventionteams.com/_next/image?url=https%3A%2F%2Fventionteams.com%2Fmedia%2Foriginal_images%2FCustom_software_development_03-2.jpg&w=1300&q=75",
      backgroundColor: "#f0f0f0",
      line: "#3155FF",
      lightButtonBg: "#101C57",
      DarkButtonBg: "#FF9AFF",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    slideRef.current.style.transform = `translateX(-${activeSlide * 100}%)`;
  }, [activeSlide]);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };
  const getSlideTextColor = (index, activeSlide) => {
    if (index === activeSlide) {
      switch (index) {
        case 0:
          return "text-[#FF977E]";
        case 1:
          return "text-[#FF6FFF]";
        case 2:
          return "text-[#FF977E]";
        case 3:
          return "text-[#3155FF]";
        default:
          return "text-[#FF977E]";
      }
    }
    return "text-[#434345]";
  };
   const getSlideButtonColor = (index, activeSlide) => {
     if (index === activeSlide) {
       switch (index) {
         case 0:
           return "hover:bg-[#52002D]";
         case 1:
           return "hover:bg-[#39175B]";
         case 2:
           return "hover:bg-[#52002D]";
         case 3:
           return "hover:bg-[#101C57]";
         default:
           return "hover:bg-[#434345]";
       }
     }
     return "text-[#434345]";
   };
   const getSlideButtonColorDark = (index, activeSlide) => {
     if (index === activeSlide) {
       switch (index) {
         case 0:
           return "hover:bg-[#FF977E]";
         case 1:
           return "hover:bg-[#FF9AFF]";
         case 2:
           return "hover:bg-[#FF977E]";
         case 3:
           return "hover:bg-[#53ABFC]";
         default:
           return "hover:bg-[#FF9AFF]";
       }
     }
     return "text-[#434345]";
   };

  return (
    <div className="carousel pt-[120px] overflow-hidden px-10 pb-24 ">
      <div className="flex">
        <div className="flex flex-col">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${
                index === activeSlide ? "active" : "hidden"
              } transition-opacity duration-[0.65s]`}
            >
              <div
                className={`title w-[915px] bg-[${slide.titleBg}] h-[279px] p-7 items-center duration-[0.65s] `}
              >
                <h1
                  className={`text-8xl ${
                    index == 3 ? "text-white" : "text-black"
                  }  duration-[0.65s]`}
                >
                  {slide.title}
                </h1>
              </div>
            </div>
          ))}
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${
                index === activeSlide ? "active" : "hidden"
              } transition-opacity duration-500 flex items-end justify-end h-[580px]`}
            >
              <div className="content flex flex-col items-end pr-10 ">
                <div className="text w-[490px]">
                  <p className=" text-[24px] ">{slide.text}</p>
                </div>
                {theme === "light" ? (
                  <button
                    className={`button font-[600] flex justify-between p-6 w-[490px] pl-10 mt-14 transition-[1000s] h-[90px] bg-[${
                      slide.titleBg
                    }] ${getSlideButtonColor(index, activeSlide)} `}
                  >
                    <h2
                      className={` ${
                        index == 3 ? "text-white" : "text-black"
                      } text-[33px] `}
                    >
                      {slide.buttonText}
                    </h2>
                    <h2
                      className={` ${
                        index == 3 ? "text-white" : "text-black"
                      } text-[50px] `}
                    >
                      {" "}
                      <HiMiniArrowUpRight />
                    </h2>
                  </button>
                ) : (
                  <button
                    className={`button font-[600] flex justify-between p-6 w-[490px] pl-10 mt-14 transition-[1000s] h-[90px] bg-[${
                      slide.titleBg
                    }] ${getSlideButtonColorDark(index, activeSlide)} ${
                      index == 3 ? "text-white" : "text-black"
                    } ${index === 3 ? "hover:text-black" : ""} `}
                  >
                    <h2 className={`  text-[33px] `}>{slide.buttonText}</h2>
                    <h2 className={`text-[50px] `}>
                      {" "}
                      <HiMiniArrowUpRight />
                    </h2>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className=" flex flex-col ">
          {theme === "light" ? (
            <div className="flex justify-end space-x-5 h-[259px] items-end">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-2 
                ${index === activeSlide ? "text-[#39175B]" : "text-[#D2D2D5]"}`}
                  onClick={() => handleSlideClick(index)}
                >
                  <div
                    className={`h-[2px] duration-75 ${
                      index === activeSlide ? "w-[155px]" : "w-[36px]"
                    } bg-current transition-width duration-[0.65s]`}
                  ></div>
                  <p className=" text-2xl font duration-[0.65s] ">
                    0{index + 1}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-end space-x-5 h-[259px] items-end">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`cursor-pointer p-2 
                
               ${getSlideTextColor(index, activeSlide)}`}
                  onClick={() => handleSlideClick(index)}
                >
                  <div
                    className={`h-[2px] ${
                      index === activeSlide ? "w-[155px]" : "w-[36px]"
                    } bg-current transition-width duration-300`}
                  ></div>
                  <p className=" text-2xl ">0{index + 1}</p>
                </div>
              ))}
            </div>
          )}

          <div className=" box  w-[900px] overflow-hidden right-0 mt-[20px]">
            <div
              className="flex transition-transform duration-[0.65s] w-[900px]   "
              ref={slideRef}
            >
              {slides.map((slide, index) => (
                <div key={index} className=" flex-shrink-0 ">
                  <img
                    src={slide.imageUrl}
                    alt={`Slide ${index + 1}`}
                    className=" w-[900px] "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
