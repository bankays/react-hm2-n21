import React from "react";
import "./Hero1.css";

function Hero1() {
  return (
    <div className="hero1">
      <div className="container">
        <div className="obj1">
          <div className="left">
            <p className="hero1-p1">
              Hairstyle Reflects The Personality Inside You
            </p>
            <p className="hero1-p2">
              It is a long established fact that a reader will be  distracted by
              the readable content of a page w hen looking at.
            </p>
            <div className="hero1-group-btn1">
              <button className="hero1-btn1">Get started</button>
            </div>
          </div>
          <div className="right">
            <img className="hero1-img1" src="assets/hero1-img1.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero1;
