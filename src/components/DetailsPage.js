import React from 'react';
import { useLocation } from 'react-router';
import Header from './Header';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
    const covid19Data = useSelector((state)=> state.covid19Data);
  const data = useLocation();
  const countryName = data.pathname.substring(1).replace(/[^a-zA-Z. ]/g, ' ');
  const countryData = covid19Data.filter((data) => data.Country.localeCompare(countryName)===0);
  return (
    <>
      <Header heading={countryName} />
      <div>
        <h1>Hello</h1>
      </div>
    </>
  );
};

export default DetailsPage;
