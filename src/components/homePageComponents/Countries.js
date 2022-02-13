import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from '@react-icons/all-files/fi/FiArrowRightCircle';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Countries = (props) => {
  const { data: { Country, TotalConfirmed } } = props;
  const navigate = useNavigate();
  return (
    <motion.div
      className="category-top"
      initial={{ x: '-100vw' }}
      animate={{ x: -0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
      whileHover={{ scale: 1.1, zIndex: 1 }}
    >
      <button
        type="button"
        className="category-country"
        onClick={() => navigate(`details/${Country}`)}
      >
        {Country}
      </button>
      <h1 className="category-infected">{TotalConfirmed}</h1>
      {' '}
      <FiArrowRightCircle
        className="arrow-icon"
        onClick={() => navigate(`details/${Country}`)}
      />
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
