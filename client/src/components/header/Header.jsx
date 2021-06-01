import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src={process.env.PUBLIC_URL + "./assets/ocean.jpg"}
        alt="headerImg"
      />
    </div>
  );
};

export default Header;
