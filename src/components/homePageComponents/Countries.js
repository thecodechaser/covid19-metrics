import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from '@react-icons/all-files/fi/FiArrowRightCircle';
import { NavLink } from 'react-router-dom';

const Countries = (props) => {
  const { data: { Country, TotalConfirmed } } = props;
  return (
    <div className="category-top">
      <NavLink
        className="nav-links"
        to={{
          pathname: `/${Country}`, Country,
        }}
      >
        <h1 className="category-country">{Country}</h1>
      </NavLink>
      <h1 className="category-infected">{TotalConfirmed}</h1>
      <NavLink to={{
        pathname: `/${Country}`, Country,
      }}
      >
        {' '}
        <FiArrowRightCircle className="arrow-icon" />
      </NavLink>
    </div>

  );
};

Countries.propTypes = {
  data: PropTypes.shape({
    TotalConfirmed: PropTypes.number,
    Country: PropTypes.string,
  }).isRequired,
};

export default Countries;
