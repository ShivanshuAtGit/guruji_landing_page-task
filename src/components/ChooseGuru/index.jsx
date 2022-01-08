import React from "react";
import "./styles.css";

const ChooseGuru = () => {
  return (
    <section className="choose-guru">
      <section className="reason-box">
        <h2>4 Reason why you should choose Guruji</h2>
        <ul className="reason-list">
          <li>
            <img src="/assets/reason1.svg" alt="reason1" />
            <span className="reason-box-content">
              <h3>800+ Outstanding astrologers</h3>
              <p>Verified and experience astrologersge</p>
            </span>
          </li>
          <li>
            <img src="/assets/reason2.svg" alt="reason1" />
            <span className="reason-box-content">
              <h3>Get your answer anytime anywhere</h3>
              <p>You don't need astrologer near you</p>
            </span>
          </li>
          <li>
            <img src="/assets/reason3.svg" alt="reason1" />
            <span className="reason-box-content">
              <h3>Diversified services</h3>
              <p>
                Tarot, Vedic, Vastu, Palmism, Face reading and anything you need
              </p>
            </span>
          </li>
          <li>
            <img src="/assets/reason4.svg" alt="reason1" />
            <span className="reason-box-content">
              <h3>100% Guarantee???</h3>
              <p>Verified and experience astrologersge</p>
            </span>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default ChooseGuru;
