import React, { useRef, useState } from "react";
import "./styles.css";
const cards = [0, 1, 2, 3];
let clear;
const GuaranteeBlock = () => {
  let scrollWrapperRef = useRef(null);
  const [btn, setBtn] = useState(0);

  // Scroll Check
  const scrollCheck = () => {
    clearTimeout(clear);
    clear = setTimeout(() => {
      scrollWrapperRef.current.scrollLeft =
        scrollWrapperRef.current.offsetWidth *
        Math.round(
          scrollWrapperRef.current.scrollLeft /
            scrollWrapperRef.current.offsetWidth
        );
    }, 40);
    setBtn(
      Math.round(
        scrollWrapperRef.current.scrollLeft /
          scrollWrapperRef.current.offsetWidth
      )
    );
  };

  const handleSlide = (e) => {
    const { id } = e.target;
    scrollWrapperRef.current.scrollLeft =
      scrollWrapperRef.current.offsetWidth * parseInt(id);
  };

  return (
    <div className="guarantee-block">
      <img
        className="guarantee-img"
        src="/assets/guarantee.svg"
        alt="guarantee"
      />
      <h2>100% Satisfaction guarantee</h2>
      <p>
        If you are not satisfied by your consultation. We promise you to refund
        and you can take another Guruji
      </p>
      <ul
        className="review-card-list"
        ref={scrollWrapperRef}
        onScroll={scrollCheck}
      >
        {cards.map((item) => (
          <li key={item} className="review-card">
            <img
              src="/assets/profile.png"
              className="review-profile-pic"
              alt="profile"
            />
            <div className="review-card-content">
              <p className="card-name">
                Swatanwa Astro to <a href="#">Exporu U</a>
              </p>
              <div className="review-rating">
                <img src="/assets/review-rating.png" alt="star" />
                <span>August 25th 2021</span>
              </div>
              <p className="review-testimony">
                Gave me a basic understanding of some key words sand rases which
                I really like it&#33; Gave me a basic understanding of some key
                words sand phrases which I really like it like it like it like
                it.
              </p>
              <div>
                <button className="review-btn">Text</button>
                <button className="review-btn">Text</button>
                <button className="review-btn">Text</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="testimony-slider-btn-wrapper">
        {cards.map((item) =>
          item === btn ? (
            <button
              className="active-scroll-bar"
              key={item}
              id={item}
              onClick={handleSlide}
            ></button>
          ) : (
            <button key={item} id={item} onClick={handleSlide}></button>
          )
        )}
      </div>
    </div>
  );
};

export default GuaranteeBlock;
