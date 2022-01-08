import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import "./styles.css";

const profileList = [
  "Order History",
  "Recharge History",
  "Followed Astrologer",
  "Account Setting",
];

const ProfileBox = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((preState) => !preState);
  };

  return (
    <div className="dropdown">
      <img
        className="profile"
        onClick={handleClick}
        src="assets/Avatar-small.png"
      />
      <HiMenu className="menu" />
      <div className={`profile-dropbox ${open ? "show" : null}`}>
        <div className="polygon"></div>
        <div className="profile-header">
          <img className="profile" src="assets/Avatar.png" />
          <p>Philpy</p>
        </div>
        <ul className="list">
          {profileList.map((item) => (
            <li
              key={item}
              className="list-item"
              id={item}
              onClick={handleClick}
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="profile-logout" onClick={handleClick}>
          Log out
        </div>
      </div>
    </div>
  );
};

export default ProfileBox;
