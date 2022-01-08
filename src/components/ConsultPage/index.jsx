import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./styles.css";

const slideItems = [
  { key: "1", label: "Astrology", sub: "Verified and experience astrologers" },
  {
    key: "2",
    label: "Kundli matching",
    sub: "Verified and experience astrologers",
  },
  { key: "3", label: "Numerology", sub: "Verified and experience astrologers" },
  { key: "4", label: "Palmistry", sub: "Verified and experience astrologers" },
  { key: "5", label: "Lal Kitab", sub: "Verified and experience astrologers" },
  { key: "6", label: "Astrology", sub: "Verified and experience astrologers " },
  {
    key: "7",
    label: "Kundli matching",
    sub: "Verified and experience astrologers",
  },
  { key: "8", label: "Numerology", sub: "Verified and experience astrologers" },
];

const ConsultPage = () => {
  const [isScenario, setScenario] = useState(false);
  let scrollWrapperRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrollWrapperRef.current.scrollLeft += shift;
    setScrollX(scrollX + shift);

    if (
      Math.floor(
        scrollWrapperRef.current.scrollWidth -
          scrollWrapperRef.current.scrollLeft
      ) <= scrollWrapperRef.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  // Scroll Check
  const scrollCheck = () => {
    setScrollX(scrollWrapperRef.current.scrollLeft);
    if (
      Math.floor(
        scrollWrapperRef.current.scrollWidth -
          scrollWrapperRef.current.scrollLeft
      ) <= scrollWrapperRef.current.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
  };

  const handleSelect = () => {
    setScenario((prev) => !prev);
  };

  return (
    <section className="consult">
      <h1>All the problem you can consult and get answer</h1>
      <div>
        <button
          onClick={handleSelect}
          className={`consult-btn ${isScenario && "active"}`}
        >
          Scenario
        </button>
        <button
          onClick={handleSelect}
          className={`consult-btn ${!isScenario && "active"}`}
        >
          Consult methods
        </button>
      </div>
      <div className="slider">
        {scrollX !== 0 && (
          <button onClick={() => slide(-200)} className="slide-btn prev">
            <MdKeyboardArrowLeft style={{ fontSize: 25 }} />
          </button>
        )}
        {!scrollEnd && (
          <button onClick={() => slide(+200)} className="slide-btn next">
            <MdKeyboardArrowRight style={{ fontSize: 25 }} />
          </button>
        )}
        <ul
          className="slide-wrapper"
          ref={scrollWrapperRef}
          onScroll={scrollCheck}
        >
          {slideItems.map((item) => (
            <li key={item.key} className="slide-cards">
              <p>{item.label}</p>
              <p className="sub-para">{item.sub}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ConsultPage;
