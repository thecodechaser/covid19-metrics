import React from 'react';
import { useLocation } from 'react-router';

const DetailsPage = () => {
  const data = useLocation();
  const countryName = data.pathname.substring(1);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default DetailsPage;
