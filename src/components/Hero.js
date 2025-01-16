import React, { useEffect } from "react";
import "../styles/Hero.css";

const Hero = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="hero">
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <h1>Welcome to My Website</h1>
      <p>Your perfect platform to explore creativity.</p>
      <button className="cta">Learn More</button>
    </section>
  );
};

export default Hero;
