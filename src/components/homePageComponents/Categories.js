import React from 'react';
import PropTypes from 'prop-types';

const Categories = (props) => {
  const { data: { country, infected } } = props;
  return (
    <div className="category-top">
      <h1>{country}</h1>
      <h1>{infected}</h1>
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
