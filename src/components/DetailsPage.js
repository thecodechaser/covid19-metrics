import React from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { IoMdArrowRoundBack } from '@react-icons/all-files/io/IoMdArrowRoundBack';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import Banner from '../asset/Banner.jpeg';

const DetailsPage = () => {
  const covid19Data = useSelector((state) => state.covid19Data.countriesData);
  const data = useLocation();
  const countryName = data.pathname.substring(1).replace(/[^a-zA-Z. ]/g, ' ');
  const countryData = covid19Data.filter((data) => data.Country.localeCompare(countryName) === 0);
  return (
    <>
      <Header heading={countryName} />
      <main>
          <NavLink to={"/"}>
          <IoMdArrowRoundBack className="back-icon"/></NavLink>
          <div className="banner-div">
          <img src={Banner} alt="COVID19" className="img-banner" />
          <h2 className="banner-h2">
            COVID19 statestics
            <br />
            Over the world
          </h2>
        </div>
        
      </main>
    </>
  );
};

export default DetailsPage;
