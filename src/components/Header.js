import React from 'react';
import PropTypes from 'prop-types';
import { BsFillMicFill } from '@react-icons/all-files/bs/BsFillMicFill';
import { IoIosSettings } from '@react-icons/all-files/io/IoIosSettings';

const Header = (props) => {
  const { heading } = props;
  return (
    <header className="header">
      <div className="header-top">
        <h3 className="header-h3">{heading}</h3>
        <div className="header-icons">
          <BsFillMicFill className="mic icon" />
          <IoIosSettings className="settings icon" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  heading: PropTypes.shape({
    heading: PropTypes.string,
  }).isRequired,
};

export default Header;
