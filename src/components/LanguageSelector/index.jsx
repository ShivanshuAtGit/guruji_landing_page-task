import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import "./styles.css";

const langData = [
  "English",
  "Hindi",
  "Marathi",
  "Malayalam",
  "Kannada",
  "Tamil",
  "Telugu",
];

const CustomDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const handleClick = () => {
    setOpen((preState) => !preState);
  };

  const handleSelectLang = (e) => {
    const { id } = e.target;
    setSelectedLang(id);
    handleClick();
  };

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={handleClick}>
        <span>{selectedLang}</span> <RiArrowDownSLine />
      </button>
      <ul className={`dropbox ${open ? "show" : null}`}>
        <div className="polygon"></div>
        {langData.map((lang) => (
          <li
            key={lang}
            className="list-item"
            onClick={handleSelectLang}
            id={lang}
          >
            {lang}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropdown;
