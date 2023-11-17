import React from "react";
import "./Hero4.css";
function Hero4() {
  return (
    <div className="container">
      <div className="hero4">
        <p className="hero4-p1">Our Gallery</p>
        <div className="cards">
          <img className="images" src="assets/hero4-img1.svg" alt="" />
          <img className="images" src="assets/hero4-img2.svg" alt="" />
          <img className="images" src="assets/hero4-img3.svg" alt="" />
          <img className="images" src="assets/hero4-img4.svg" alt="" />
          <img className="images" src="assets/hero4-img5.svg" alt="" />
          <img className="images" src="assets/hero4-img6.svg" alt="" />
        </div>
        <button className="hero4-btn1">View All</button>
      </div>
    </div>
  );
}

export default Hero4;
