import React from 'react';
import Banner from '../asset/Banner.jpeg';

const HomePage = () => (
  <main>
    <div className="banner-div">
      <img src={Banner} alt="COVID19" className="img-banner" />
      <h2 className="banner-h2">
        COVID19 statestics
        <br />
        Over the world
      </h2>
    </div>
    <div className="search-bar">
        <h3 className="search-bar-h3">Search by country name</h3>
        <input type="text" placeholder="Search" className="search-bar-input"/>
        <h4 className="search-bar-h4">STATS BY COUNTRY</h4>
    </div>
  </main>
);

export default HomePage;
