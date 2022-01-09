import React, { useRef, useState } from "react";
import image1 from "../../Assets/image1.png";
import image2 from "../../Assets/image2.png";
import image3 from "../../Assets/image3.png";
import "./styles.css";

const cards = [0, 1, 2];
let clear;

const HowWorks = () => {
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
    <section className="works-container">
      <div>
        <h2>How it works</h2>
        <div
          className="work-card-wrapper"
          ref={scrollWrapperRef}
          onScroll={scrollCheck}
        >
          <div className="works-card">
            <img src={image1} alt="img1" />
            <h3>Find your Guruji</h3>
            <p>
              Browse astrologers and check their skills, specialties and
              reviews. To find your destinated Guruji.
            </p>
          </div>

          <div className="works-card">
            <img src={image2} alt="img1" />
            <h3>Recharge for Consultation</h3>
            <p>
              After recharge, you can have the new user offer: ₹5/min and MAX 6
              mins duration.
            </p>
          </div>

          <div className="works-card">
            <img src={image3} alt="img1" />
            <h3>Solve problem with astrologers</h3>
            <p>
              Call and Ask astrologers your problems. By providing your birth
              chart, astrologer can help you get the answer.
            </p>
          </div>
        </div>
      </div>
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
    </section>
  );
};

export default HowWorks;
