import React from "react";
import LanguageSelector from "../LanguageSelector";
import ProfileBox from "../ProfileBox";
import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="header_orders">
          <img src="assets/guruji_logo.svg" alt="Guruji" className="logo" />
          <span className="header_quote">Talk with astrologers</span>
        </div>
        <div className="header_orders">
          <div className="item">
            <LanguageSelector />
          </div>
          <span className="item wallet">&#8377; 200</span>
          <div className="item">
            <ProfileBox />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
