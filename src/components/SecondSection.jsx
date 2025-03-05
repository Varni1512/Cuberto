import React from 'react';
import './SecondSection.css'

const SecondSection = () => {
  return (
    <div id="secondpage">
      <div id="videohead3">
        <div id="leftvideodiv">
          <video src="\videos\1.mp4" autoPlay loop muted></video>
        </div>
        <div id="righttextdiv">
          <h3>Cuberto is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.</h3>
          <button className="cb-btn cb-btn_more">
            <span className="cb-btn_more-title">
              <span>How we work</span>
            </span>
            <span className="cb-btn_more-ripple">
              <span></span>
            </span>   
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;