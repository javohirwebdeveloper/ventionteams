import { useTheme } from "../ThemeContext.jsx";
import Section1 from "./Section1.jsx";
import React, { useRef, useEffect } from "react";
  const logos = [
  "https://ventionteams.com/media/documents/bevi-2.svg",
  "https://ventionteams.com/media/documents/ey_eVyZsxY.svg",
  "https://ventionteams.com/media/documents/coca_cola-2.svg",
  "https://ventionteams.com/media/documents/seatgeek-2.svg",
  "https://ventionteams.com/media/documents/postman_new.svg",
  "https://ventionteams.com/media/documents/costa-coffee_e0o5HKN.svg",
  "https://ventionteams.com/media/documents/dealcloud-2.svg",
  "https://ventionteams.com/media/documents/blackboard_black-2.svg",
  "https://ventionteams.com/media/documents/pwc_2uTD1Rv.svg",
  "https://ventionteams.com/media/documents/Brex_rd2ZtNg.svg",
  "https://ventionteams.com/media/documents/paypal_RVc4KIP.svg",
  "https://ventionteams.com/media/documents/vimeo_0ASwh1Y.svg",
  "https://ventionteams.com/media/documents/ibm-2.svg",
  "https://ventionteams.com/media/documents/mt._sinai-2.svg",
  "https://ventionteams.com/media/documents/grubhub_cPYd20X.svg",
  "https://ventionteams.com/media/documents/Crown_Castle_7CxtjDH.svg",
  "https://ventionteams.com/media/documents/thirty_madison-2.svg",
  "https://ventionteams.com/media/documents/classpass_black_icOPy5z.svg",
  "https://ventionteams.com/media/documents/Merkle_black.svg",
  "https://ventionteams.com/media/documents/Slice_black.svg",
];
import "./LogoScroll.css"; 
const Content = () => {
  const { theme, toggleTheme } = useTheme();


  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      if (scrollElement) {
        scrollElement.scrollLeft += 1; 
        animationFrameId = requestAnimationFrame(scroll);
      }
    };

    scroll();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
 return (
   <div
     className={` border border-l-0 border-r-0 pl-36 border-b-0 flex flex-col ${
       theme === "light" ? "border-[#D2D2D5]" : "border-[#434345]"
     }`}
   >
     <div
       className={`flex flex-col pt-18 border  border-t-0 pb-10 ${
         theme === "light" ? "border-[#D2D2D5]" : "border-[#434345]"
       }`}
     >
       <div className={`flex flex-col pt-52 pl-14 pr-14 pb-20 `}>
         <h2 className="text-[47px] font-medium text-left ">
           With 20+ years of providing software development services for
           technological enterprises, successful startups, and AI-empowered
           companies worldwide, our developers demonstrate exceptional
           efficiency and expertise.
         </h2>
         <div className="w-full flex justify-end">
           <p className="text-[24px] w-[850px] mt-6">
             On average, Vention clients benefit $600,000+ from annual savings
             as a result of our collaboration.
           </p>
         </div>
       </div>
       <div
         className={`flex flex-col border border-t-0 border-r-0  ${
           theme === "light" ? "border-[#D2D2D5]" : "border-[#434345]"
         } `}
       ></div>
       <div className={`flex flex-wrap pl-9 pt-16 pb-16`}>
         <div className="w-[800px]">
           <h2
             className={` text-[30px] ${
               theme === "light" ? "text-[#52002D]" : "text-[#FF977E]"
             } `}
           >
             Key stats
           </h2>
         </div>
         <div className="flex flex-col gap-y-6 w-[450px]">
           <h2
             className={` text-[114px] ${
               theme === "light" ? "text-[#52002D]" : "text-[#FF977E]"
             } `}
           >
             500+
           </h2>
           <h4 className="text-[24px]">award-winning clients</h4>
         </div>
         <div className="flex flex-col gap-y-6 w-[450px]">
           <h2
             className={` text-[114px] ${
               theme === "light" ? "text-[#52002D]" : "text-[#FF977E]"
             } `}
           >
             $15B+
           </h2>
           <h4 className="text-[24px]">in client acquisitions</h4>
         </div>
         <div className="flex flex-col gap-y-6 w-[400px] ">
           <h2
             className={` text-[114px] ${
               theme === "light" ? "text-[#52002D]" : "text-[#FF977E]"
             } `}
           >
             36
           </h2>
           <h4 className="text-[24px]">month average engagement</h4>
         </div>
         <div className="flex flex-col gap-y-6 w-[400px] ">
           <h2
             className={` text-[114px] ${
               theme === "light" ? "text-[#52002D]" : "text-[#FF977E]"
             } `}
           >
             20+
           </h2>
           <h4 className="text-[24px]">client IPOs supported</h4>
         </div>
         <div className="flex flex-col gap-y-6 w-[450px] ">
           <h2
             className={` text-[114px] ${
               theme === "light" ? "text-[#52002D]" : "text-[#FF977E]"
             } `}
           >
             20+
           </h2>
           <h4 className="text-[24px]">years of experience</h4>
         </div>
         <div className="flex flex-col gap-y-6 w-[450px] ">
           <h2
             className={` text-[114px] ${
               theme === "light" ? "text-[#52002D]" : "text-[#FF977E]"
             } `}
           >
             3K+
           </h2>
           <h4 className="text-[24px]">world-class engineers</h4>
         </div>
       </div>
       <div
         className={`flex flex-col border border-t-0 border-r-0  ${
           theme === "light" ? "border-[#D2D2D5]" : "border-[#434345]"
         } `}
       ></div>
       <div className=" pt-52 pl-12 pb-11 ">
         <h2 className=" text-[59px] ">Trusted by the best</h2>
         <p className="text-[24px] mt-4">
           Companies ranging from early-stage startups to Fortune 500
           enterprises partner with us to develop game-changing growth
           solutions.
         </p>
       </div>
       <div
         className={`flex flex-col border border-t-0 border-r-0  ${
           theme === "light" ? "border-[#D2D2D5]" : "border-[#434345]"
         } `}
       ></div>
       <div className="logo-scroll-container mt-11 mb-11 " ref={scrollRef}>
         <div className="logo-scroll gap-48">
           {logos.map((logo, index) => (
             <img
               key={index}
               src={logo}
               alt={`Logo ${index + 1}`}
               className="logo"
             />
           ))}
         </div>
       </div>
<Section1/>
     </div>
   </div>
 );
}
export default Content;