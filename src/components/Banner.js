import React, { useState } from "react";
import "../styles/Banner.css";
import { Button } from "@material-ui/core";
// import { Search } from "@material-ui/icons";
import Search from "./Search";
function Banner() {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className="banner">
      <div className="banner_search">
        {showSearch && <Search />}
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner_searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>
      </div>
      <div className="banner_info">
        <h1>Get out and stretch your imagination</h1>
        <h3>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h3>
        <Button variant="outlined">Explore Near you</Button>
      </div>
    </div>
  );
}

export default Banner;
