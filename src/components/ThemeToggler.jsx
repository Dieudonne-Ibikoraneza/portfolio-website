// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

const ThemeToggler = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <span
      onClick={toggleTheme}
      className="text-2xl text-smallTextColor cursor-pointer"
    >
      {theme === "light" ? (
        <i className="ri-sun-line"></i>
      ) : (
        <i className="ri-moon-line"></i>
      )}
    </span>
  );
};

export default ThemeToggler;
