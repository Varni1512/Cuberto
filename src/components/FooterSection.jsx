import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import './Footer.css'

const FooterSection = () => {
  useEffect(() => {
    // Social div hover animations
    document.querySelectorAll(".socialmaindiv").forEach(function(socialmaindiv) {
      socialmaindiv.addEventListener("mousemove", function() {
        gsap.to(socialmaindiv.children[0], {
          height: "100%",
          opacity: 1,
          ease: "expo",
          duration: 0.3,
        });
      });

      socialmaindiv.addEventListener("mouseleave", function() {
        gsap.to(socialmaindiv.children[0], {
          height: 0,
          opacity: 0,
          ease: "expo",
          duration: 0.3,
        });
      });
    });
  }, []);

  return (
    <div id="footer">

      <div id="socialhead">
        <h5 id="socialheading">Social Media and contacts</h5>
      </div>
      
      {/* Social media links */}
      {['Instagram', 'LinkedIn', 'Dribbble', 'Github', 'YouTube', 'Behance', 'Twitter'].map((platform) => (
        <div className="socialmaindiv" key={platform}>
          <div className="stripetwo">
            <div className="bgcnt">
              {Array(7).fill().map((_, i) => (
                <div className="elem" key={i}>
                  <h4>{platform}</h4>
                  <ArrowUpRight size={24} />
                </div>
              ))}
            </div>
          </div>
          <div className="socialdiv">
            <h4>{platform}</h4>
            <ArrowUpRight size={24} />
          </div>
        </div>
      ))}
      
      <div id="footeradd">
        <div className="footeraddleft">
          <h5>
            MAIN OFFICE&nbsp;901 N Pitt Street
            Alexandria VA, 22314
          </h5>
          <button className="cb-btn cb-btn_more3">
            <span className="cb-btn_more-title3">
              <span>INFO@CUBERTO.COM</span>
            </span>
            <span className="cb-btn_more-ripple3">
              <span></span>
            </span>    
          </button>
        </div>
        <div className="footeraddleft">
          <h5>
            SECOND OFFICE&nbsp;Na Perstyne
            342/1, 11000 Prague
          </h5>
          <button className="cb-btn cb-btn_more3">
            <span className="cb-btn_more-title3">
              <span>+1301549 9309</span>
            </span>
            <span className="cb-btn_more-ripple3">
              <span></span>
            </span>    
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;