import React from "react";
import "./styles.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-is-mobile"></div>
        <h1>Find your destiny and remedies with top expert astrologers</h1>
        <h3>Call to consult with professional astrologers</h3>
        <div className="banner-rating">
          <img src="/assets/rating.png" alt="rating" className="rating-box" />
        </div>
        <button className="banner-btn">Talk Now</button>
      </div>
    </div>
  );
};

export default Banner;
