import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ===============  logo  ============ */}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              D
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">Diox</h2>
              <p className="text-smallTextColor text-[14px] font-[500]">personal</p>
            </div>
          </div>
          {/* ===============  logo end ============ */}
          {/* ===============  menu start  ============ */}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li><a href="#about" className="text-smallTextColor font-[600]"></a>About</li>
              <li><a href="#services" className="text-smallTextColor font-[600]"></a>Services</li>
              <li><a href="#portfolio" className="text-smallTextColor font-[600]"></a>Contact</li>
              <li><a href="#contact" className="text-smallTextColor font-[600]">Contact</a></li>
            </ul>
          </div>
          {/* ===============  menu end  ============ */}
        </div>
      </div>
    </header>
  );
};

export default Header;
