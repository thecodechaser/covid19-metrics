import React from 'react';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { IoMdArrowRoundBack } from '@react-icons/all-files/io/IoMdArrowRoundBack';
import Header from './Header';
import { NavLink } from 'react-router-dom';

const DetailsPage = () => {
  const covid19Data = useSelector((state) => state.covid19Data.countriesData);
  const data = useLocation();
  const countryName = data.pathname.substring(1).replace(/[^a-zA-Z. ]/g, ' ');
  const countryData = covid19Data.filter((data) => data.Country.localeCompare(countryName) === 0);
  return (
    <>
      <Header heading={countryName} />
      <div>
          <NavLink to={"/"}>
          <IoMdArrowRoundBack className="back-icon"/></NavLink>
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default DetailsPage;
