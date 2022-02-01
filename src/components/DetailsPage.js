import React from 'react';
import { useLocation } from 'react-router';
import Header from './Header';
import { useSelector } from 'react-redux';

const DetailsPage = () => {
  const data = useLocation();
  const countryName = data.pathname.substring(1);
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
