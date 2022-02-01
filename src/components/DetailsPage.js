import React from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { IoMdArrowRoundBack } from '@react-icons/all-files/io/IoMdArrowRoundBack';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Banner from '../asset/Banner.jpeg';

const DetailsPage = () => {
  const covid19Data = useSelector((state) => state.covid19Data.countriesData);
  const data = useLocation();
  const countryName = data.pathname.substring(1).replace("%20", ' ').replace("%20", ' ');
  const countryData = covid19Data.filter((data) => data.Country.localeCompare(countryName) === 0);
  return (
    <>
      <Header heading={countryName} />
      <main>
        <NavLink to="/">
          <IoMdArrowRoundBack className="back-icon" />
        </NavLink>
        <div className="banner-div">
          <img src={Banner} alt="COVID19" className="img-banner" />
          <h2 className="banner-h2">
            {countryName}
          </h2>
        </div>
        <div className="details-div">
          <h1 className="detail-name">Total Confirmed</h1>
          <h1 className="detail-data">{countryData[0].TotalConfirmed}</h1>
        </div>
        <div className="details-div">
          <h1 className="detail-name">New Confirmed</h1>
          <h1 className="detail-data">{countryData[0].NewConfirmed}</h1>
        </div>
        <div className="details-div">
          <h1 className="detail-name">Total Recovered</h1>
          <h1 className="detail-data">{countryData[0].TotalRecovered}</h1>
        </div>
        <div className="details-div">
          <h1 className="detail-name">New Recovered</h1>
          <h1 className="detail-data">{countryData[0].NewRecovered}</h1>
        </div>
        <div className="details-div">
          <h1 className="detail-name">Total Deaths</h1>
          <h1 className="detail-data">{countryData[0].TotalDeaths}</h1>
        </div>
        <div className="details-div">
          <h1 className="detail-name">New Confirmed</h1>
          <h1 className="detail-data">{countryData[0].NewDeaths}</h1>
        </div>
        <div className="details-div">
          <h1 className="detail-name">Last Updated</h1>
          <h1 className="detail-data">{countryData[0].Date}</h1>
        </div>
      </main>
    </>
  );
};

export default DetailsPage;
