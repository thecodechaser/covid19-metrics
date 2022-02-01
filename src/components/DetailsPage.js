import React from 'react';
import { useLocation } from 'react-router';
import Header from './Header';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
    const covidData = useSelector
  const data = useLocation();
  const countryName = data.pathname.substring(1).replace(/[^a-zA-Z. ]/g, ' ');
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
