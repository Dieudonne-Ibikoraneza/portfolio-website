// eslint-disable-next-line no-unused-vars
import React, { useRef, useEffect } from "react";
import ScrollProgressIndicator from "../ScrollProgressIndicator";
import ThemeToggler from "../ThemeToggler"; // Import the ThemeToggler component

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const completion = ScrollProgressIndicator();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;
    window.scrollTo({
      top: location,
      left: 0,
    });
  };

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header
      ref={headerRef}
      className="w-full h-[80px] leading-[80px] flex items-center"
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ===============  logo  ============ */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              D
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Diox</h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                personal
              </p>
            </div>
          </div>
          {/* ===============  logo end ============ */}
          {/* ===============  menu start  ============ */}
          <div className="menu" ref={menuRef} onClick={toggleMenu}>
            <ul className="flex items-center gap-10">
              <li>
                <a
                  onClick={handleClick}
                  href="#about"
                  className="text-smallTextColor font-[600]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#services"
                  className="text-smallTextColor font-[600]"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#portfolio"
                  className="text-smallTextColor font-[600]"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={handleClick}
                  href="#contact"
                  className="text-smallTextColor font-[600]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* ===============  menu end  ============ */}
          {/* ===============  menu right  ============ */}
          <div className="flex items-center gap-4">
            <a href="#contact">
              <button className="h-[50px] linear-button py-[0.8em] pr-[1.3em] pl-[0.9em] group">
                <svg
                  className="uiverse-svg group-hover:uiverse-svg-hover"
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="uiverse-text group-hover:translate-x-[7px] text-[16px]">
                  let&apos;s talk
                </span>
              </button>
            </a>
            <span
              onClick={toggleMenu}
              className="text-2xl text-smallTextColor md:hidden cursor-pointer"
            >
              <i className="ri-menu-line"></i>
            </span>
            {/* Replace the sun/moon icon with ThemeToggler component */}
            <ThemeToggler toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-blue-500 h-1 w-full bottom-0"
      />
    </header>
  );
};

export default Header;
