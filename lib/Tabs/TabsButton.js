import React from 'react';
import PropTypes from 'prop-types';

const TabButton = ({ children, onClick }) => (
  <button className={"tabs__button"} onClick={onClick}>
    {children}
  </button>
);

TabButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  id: PropTypes.string.isRequired
};

export default TabButton;
