import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from '@react-icons/all-files/fi/FiArrowRightCircle';

const Categories = (props) => {
  const { data: { country, infected } } = props;
  return (
    <div className="category-top">
      <h1 className="category-country">{country}</h1>
      <h1 className="category-infected">{infected}</h1>
      <FiArrowRightCircle />
    </div>
  );
};

Categories.propTypes = {
  data: PropTypes.shape({
    infected: PropTypes.number,
    country: PropTypes.string,
  }).isRequired,
};

export default Categories;
