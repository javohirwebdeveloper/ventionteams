import React, { useRef, useEffect } from "react";
import "./LogoScroll.css"; 

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

const LogoScroll1 = () => {
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
    <div className="logo-scroll-container" ref={scrollRef}>
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
  );
};

export default LogoScroll1;
