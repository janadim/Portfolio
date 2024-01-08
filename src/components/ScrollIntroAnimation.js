import React, { useState, useEffect } from "react";
import stylesheets from "../stylesheets/App.scss";

const ScrollIntroAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".introduction");

      if (element) {
        const rect = element.getBoundingClientRect();
        const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

        if (isInViewport) {
          setIsVisible(true);
          window.removeEventListener("scroll", handleScroll);
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div className={`introduction ${isVisible ? "visible" : ""}`}>
      <h1 className="introduction__title">Hello world!</h1>
      <div className="introduction__text">
        <span className="introduction__text--me"> I'm</span>
        <h1 className="introduction__text--name">Jana</h1>
      </div>
      <p className="introduction__profession">Front-end Developer</p>
    </div>
  );
};

export default ScrollIntroAnimation;
