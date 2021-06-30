import React from "react";
import Banner from "./Banner";
import "../styles/Home.css";
import Card from "./Card";
function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          title="Nature"
          desription="We handpicked more than 600,000 nature pictures for your choosing"
          price="$20"
        />
        <Card
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
          title="Nature"
          desription="We handpicked more than 600,000 nature pictures for your choosing"
          price="$20"
        />
        <Card
          src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
          title="Nature"
          desription="We handpicked more than 600,000 nature pictures for your choosing"
          price="$20"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          title="Nature"
          desription="We handpicked more than 600,000 nature pictures for your choosing"
          price="$20"
        />
        <Card
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
          title="Nature"
          desription="We handpicked more than 600,000 nature pictures for your choosing"
          price="$20"
        />
        <Card
          src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
          title="Nature"
          desription="We handpicked more than 600,000 nature pictures for your choosing"
          price="$20"
        />
      </div>
    </div>
  );
}

export default Home;
