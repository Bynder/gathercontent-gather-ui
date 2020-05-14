import React from 'react';
import PropTypes from 'prop-types';

const TabButton = ({ children, onClick }) => (
  <button type="button" className="tabs__button px-2 py-1" onClick={onClick}>
    {children}
  </button>
);

TabButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onClick: PropTypes.func.isRequired
};

export default TabButton;
