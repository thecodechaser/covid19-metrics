import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from '@react-icons/all-files/fi/FiArrowRightCircle';
import { NavLink } from 'react-router-dom';

const Categories = (props) => {
  const { data: { Country, TotalConfirmed } } = props;
  return (

    <div className="category-top">
      <h1 className="category-country">{Country}</h1>
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

Categories.propTypes = {
  data: PropTypes.shape({
    TotalConfirmed: PropTypes.number,
    Country: PropTypes.string,
  }).isRequired,
};

export default Categories;
