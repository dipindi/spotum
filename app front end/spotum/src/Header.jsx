import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <header className="header">
      <div className="headerContent">
        <h1 className="logo" onClick={handleLogoClick}>
          Spotum
        </h1>
        <nav className="nav">
          <a
            href="https://github.com/dipindi/spotum/tree/main/spotum-web"
            className="navLink"
          >
            GitHub
          </a>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f62aea05180bdec6b05fc231ea7831a2ffb84e1b2039df7581abb586a00c24a?apiKey=f3d810e59048487dac6103fbc9e8f0d9&"
            alt="GitHub icon"
            className="navIcon"
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
