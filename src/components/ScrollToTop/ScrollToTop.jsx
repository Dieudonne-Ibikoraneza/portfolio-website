// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className={`fixed right-4 bottom-4 ${isVisible ? 'opacity-100' : 'opacity-0'} bg-primaryColor rounded-lg px-2`}>
      <button onClick={scrollToTop} className="scrollToTop-btn">
      <div className="text">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
      </div>
      <div className="clone">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
      </div>
      <svg
        strokeWidth="2"
        stroke="currentColor"
        viewBox="0 0 24 24"
        fill="none"
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        width="20px"
      >
        <path
          d="M14 5l7 7m0 0l-7 7m7-7H3"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></path>
      </svg>
    </button>
    </div>
  );
};

export default ScrollToTop;
