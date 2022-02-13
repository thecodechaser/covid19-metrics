import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from '@react-icons/all-files/fi/FiArrowRightCircle';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Countries = (props) => {
  const { data: { Country, TotalConfirmed } } = props;
  return (
    <motion.div
      className="category-top"
      initial={{ x: '-100vw' }}
      animate={{ x: -0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      whileHover={{ scale: 1.1, zIndex: 1 }}
    >
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
    </motion.div>

  );
};

Countries.propTypes = {
  data: PropTypes.shape({
    TotalConfirmed: PropTypes.number,
    Country: PropTypes.string,
  }).isRequired,
};

export default Countries;
