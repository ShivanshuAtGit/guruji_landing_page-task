import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import smallAvatar from "../../Assets/Avatar-small.png";
import avatar from "../../Assets/Avatar.png";
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
        className="profile show-profile"
        onClick={handleClick}
        src={smallAvatar}
      />
      <HiMenu className="menu" onClick={handleClick} />
      <div className={`profile-dropbox ${open ? "show" : null}`}>
        <div className="polygon"></div>
        <div className="profile-header">
          <img className="profile" src={avatar} />
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
