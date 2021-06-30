import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LanguageIcon from "@material-ui/icons/Language";

function Header() {
  return (
    <div className="header">
      <img
        className="header_icon"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
        alt=""
      />

      <div className="header_center">
        <input type="text" />
        <SearchIcon />
      </div>

      <div className="header_right">
        <h3>Become a host</h3>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
