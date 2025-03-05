import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div id="hero-section">
      <div className="bounding">
        <h1 className="boundingelem">We are a digital</h1>
      </div>
      <br />
      <div className="bounding">
        <div id="videohead2" className="boundingelem">
          <div className="videoplay2">
            <video src="/videos/0(1).mp4" autoPlay loop muted></video>
          </div>
          <h1 id="italic-text">design&nbsp;</h1>
          <h1>and</h1>
        </div>
      </div>
      <br />
      <div className="bounding">
        <h1 className="boundingelem">motion agency</h1>
      </div>
    </div>
  );
};

export default HeroSection;
