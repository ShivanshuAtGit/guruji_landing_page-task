import React from "react";
import "./styles.css";

const UserRight = () => {
  return (
    <section className="user-right">
      <div className="right-container">
        <h2>We protect the rights of users</h2>
        <div className="right-card-list">
          <div className="right-card">
            <img src="/assets/right1.svg" alt="right" />
            <p>Refund if unsatisfied</p>
          </div>
          <div className="right-card">
            <img src="/assets/right2.svg" alt="right" />
            <p>Refund if unsatisfied</p>
          </div>
          <div className="right-card">
            <img src="/assets/right3.svg" alt="right" />
            <p>Refund if unsatisfied</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRight;
