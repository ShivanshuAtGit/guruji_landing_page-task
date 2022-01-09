import React, { useState, useRef } from "react";
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

const AstrologerList = () => {
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

  return (
    <section className="astrologer">
      <h2> Start your first consultation ＠₹5/min</h2>
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
            <li key={item.key} className="astrologer-slide-cards">
              <div className="profile-background-pic">
                <img src="/assets/astro-profile.png" alt="profile" />
              </div>
              <div className="astro-profile-content">
                <div>
                  &#9733; 4.7 <span>(238 Total Count)</span>
                </div>
                <p>Swatanwa Astro</p>
                <span>10+ years</span>
                <br />
                <span>Hindi,English,Gujilate</span>
                <div>₹20/min</div>
                <span>Est time~12mins</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AstrologerList;
