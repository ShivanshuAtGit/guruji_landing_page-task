import React, { useRef, useState } from "react";
import newsLogo from "../../Assets/news.png";
import news1Logo from "../../Assets/news1.png";
import news2Logo from "../../Assets/news2.png";
import "./styles.css";

const cards = [0, 1, 2];
let clear;

const NewsContainer = () => {
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
    <section className="news-container">
      <h2>Astrotalk in News</h2>
      <p>Our Sucess stories in Media Headlines and lots of Encouragement</p>
      <div
        className="news-slider-container"
        ref={scrollWrapperRef}
        onScroll={scrollCheck}
      >
        <div className="news-cards-wrapper">
          <div className="news-card">
            <img src={newsLogo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
          <div className="news-card">
            <img src={news1Logo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
          <div className="news-card">
            <img src={news2Logo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
          <div className="news-card">
            <img src={newsLogo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
          <div className="news-card">
            <img src={news1Logo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
          <div className="news-card">
            <img src={news2Logo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
        </div>
        <div className="news-cards-wrapper">
          <div className="news-card">
            <img src={news2Logo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
          <div className="news-card">
            <img src={newsLogo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
          <div className="news-card">
            <img src={news1Logo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
          <div className="news-card">
            <img src={news2Logo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
          <div className="news-card">
            <img src={newsLogo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
          <div className="news-card">
            <img src={news1Logo} alt="news-icon" />
            <p>&#127942; Jan 7, 2021</p>
          </div>
        </div>
      </div>

      <div className="news-slider-btn-wrapper">
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
    </section>
  );
};

export default NewsContainer;
