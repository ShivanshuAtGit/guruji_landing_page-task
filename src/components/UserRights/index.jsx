import React from "react";
import right1Logo from "../../Assets/right1.svg";
import right2Logo from "../../Assets/right2.svg";
import right3Logo from "../../Assets/right3.svg";
import "./styles.css";

const UserRight = () => {
  return (
    <section className="user-right">
      <div className="right-container">
        <h2>We protect the rights of users</h2>
        <div className="right-card-list">
          <div className="right-card">
            <img src={right1Logo} alt="right" />
            <p>Refund if unsatisfied</p>
          </div>
          <div className="right-card">
            <img src={right2Logo} alt="right" />
            <p>Refund if unsatisfied</p>
          </div>
          <div className="right-card">
            <img src={right3Logo} alt="right" />
            <p>Refund if unsatisfied</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRight;
