import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="landscapehead"></div>
      <p className="landscape-txt">ABOUT</p>
      <div className="about-comp">
        <p id="first-abt-head" className="abt-head">
          ABOUT COMPANY
        </p>
        <hr className="divider" />
        <p className="first-p">
          Samwell's Landscaping & Stonework is providing services to homes and businesses around the Vancouver area in
          art of landscaping and hardscaping. From the smallest job to the most elaborate landscape, we give special
          attention to every customer to help design outdoor space and ensure that your project is a complete success.
        </p>
        <p>
          Our team is dynamic, creative and maintain high quality standards involving professionalism, courtesy and
          pride in their strong expertise
        </p>
      </div>
      <div className="about-owner">
        <p className="abt-head">ABOUT OWNER</p>
        <hr className="divider" />
        <p className="first-p">
          Samuel Ouellette, owner, started out his journey early in middle school, mowing lawns on weekends with his
          father, during the school breaks and summers after graduating from high school he decided to start learning
          more about the landscape and hardscape business. After a couple years learning from different courses and
          mentors, he felt he was ready to take the next step and start a landscape business. The reason he decided to
          start his own business rather than working for a local business is because he saw a need for a company that
          was transparent and put the customer first. He knew with his attention to detail and quality craftsmanship
          that he could offer a service that would set Samwell apart from other businesses.
        </p>
      </div>
    </div>
  );
}
