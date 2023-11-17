import React from "react";
import "./Hero2.css";

function Hero2() {
  return (
    <div className="hero2">
      <div className="container">
        <div className="hero2-obj1">
          <div className="right2">
            <img className="hero2-img1" src="assets/hero2-img1.png" alt="" />
          </div>
          <div className="left2">
            <p className="hero2-p1">Our History</p>
            <p className="hero2-p2">
              It is a long established fact that a reader will be  distracted by
              the readable content of a page w hen looking at.
            </p>
            <p className="hero2-p3">
              It is a long established fact that a reader will be  distracted by
              the readable content of a page w hen looking at.
            </p>
            <div className="hero2-group-btn1">
              <button className="hero2-btn1">Learn more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
