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
  </main>
);

export default HomePage;
