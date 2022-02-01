import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../asset/Banner.jpeg';
import { fetchDataApi } from '../redux/covid19Data/covid19Data';
import Categories from './homePageComponents/Categories';
import Header from './Header';

const HomePage = () => {
  const heading = 'COVID19 statestics';
  const covid19Data = useSelector((state) => state.covid19Data.countriesData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataApi());
  }, [dispatch]);

  return (
    <>
      <Header heading={heading} />
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
          <input type="text" placeholder="Search" className="search-bar-input" />
          <h4 className="search-bar-h4">STATS BY COUNTRY</h4>
        </div>
        <div className="categories">
          {
          covid19Data.map((data) => (
            <Categories key={data.ID} data={data} />
          ))
      }
        </div>
      </main>
    </>
  );
};

export default HomePage;
