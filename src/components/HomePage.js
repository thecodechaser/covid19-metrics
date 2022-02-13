import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../asset/Banner2.jpg';
import { fetchDataApi } from '../redux/covid19Data/covid19Data';
import Countries from './homePageComponents/Countries';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const heading = 'COVID19 statestics';
  const covid19Data = useSelector((state) => state.covid19Data.countriesData);
  const globalData = useSelector((state) => state.covid19Data.globalData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataApi());
  }, [dispatch]);
  const filteredData = covid19Data.filter((item) => Object.keys(item).some((key) => item[key]
    .toString()
    .toLowerCase()
    .includes(searchText.toLocaleLowerCase())));
  return (
    <>
      <Header heading={heading} />
      <main>
        <div className="banner-div">
          <img src={Banner} alt="COVID19" className="img-banner" />
          <div className="banner-details">
            <h2 className="banner-h2">
              COVID19 statestics
              <br />
              Over the world
            </h2>
            <h3 className="banner-h3">{globalData.TotalConfirmed}</h3>
            <h4 className="banner-h4">{globalData.Date}</h4>
          </div>
        </div>
        <div className="search-bar">
          <h3 className="search-bar-h3">Search by country name</h3>
          <input type="text" placeholder="Search" className="search-bar-input" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <h4 className="search-bar-h4">STATS BY COUNTRY</h4>
        </div>
        <div className="categories">
          {
          filteredData.map((data) => (
            <Countries key={data.ID} data={data} />
          ))
      }
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
