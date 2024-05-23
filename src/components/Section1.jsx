import { useTheme } from "../ThemeContext.jsx";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Accordion.css";

export const accordionData = [
  {
    id: 1,
    title: "01 Discovery",
    content:
      "We start with your vision: What do you want to build? How can we accelerate your company’s growth to outpace the competition?",
  },
  {
    id: 2,
    title: "02 Staffing",
    content:
      "Next, we work with you to strategically assemble a team with the precise skills needed to deliver on that vision — and we do it fast. You’ll have resumes in hand for review within 48 hours",
  },
  {
    id: 3,
    title: "03 Kickoff",
    content:
      "In as little as two weeks, your remote team is ready to onboard and hit the ground running",
  },
  {
    id: 4,
    title: "04 Ramp up",
    content:
      "Ready to scale up or ramp down the team? Our flexible model was designed to grow alongside you, for as long as you need",
  },
];

const AccordionItem = ({ id, title, content, activeId, setActiveId }) => {
  const isExpanded = id === activeId;
  const { theme } = useTheme();


  return (
    <div
      className={`accordion-item h-[350px] ${isExpanded ? "expanded" : ""} border ${
        theme === "light" ? "border-[#D2D2D5]" : "border-[#434345]"
      } `}
      onMouseEnter={() => setActiveId(id)}
    >
      <div className="accordion-title pb-10 ">{title}</div>
      <div className="accordion-content">{content}</div>
    </div>
  );
};

AccordionItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  activeId: PropTypes.number.isRequired,
  setActiveId: PropTypes.func.isRequired,
};

const Section1 = ({ items = accordionData }) => {
  const { theme } = useTheme();
  const [activeId, setActiveId] = useState(items[0]?.id || 1);

  return (
    <div className={` `}>
      <div
        className={` section1 border flex  h-[620px] w-[100%] border-l-0 border-r-0 ${
          theme === "light" ? "border-[#D2D2D5]" : "border-[#434345]"
        } `}
      >
        <div
          className={`box2 w-[45%] h-[620px] ${
            theme === "light" ? "bg-[#EBEBED]" : "bg-[#29292B]"
          }`}
        ></div>
        <div
          className={`box3 w-[55%] h-[620px] ${
            theme === "light" ? "bg-[#EBEBED]" : "bg-[#29292B]"
          }`}
        >
          <h2 className="text-[59px] mt-56 ml-10 font-[700]">How we work</h2>
        </div>
      </div>
      <div className="accordion-container h-[350px] text-[30px]">
        {items.map((item) => (
          <AccordionItem
            className={` text-[30px] `}
            key={item.id}
            id={item.id}
            title={item.title}
            content={item.content}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    </div>
  );
};

Section1.propTypes = {
  items: PropTypes.array,
};

export default Section1;
