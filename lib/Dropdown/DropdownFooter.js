import React from 'react';
import PropTypes from 'prop-types';

const DropdownFooter = ({ children }) => {
  return <footer className="dropdown__footer">{children}</footer>;
};

DropdownFooter.propTypes = {
  children: PropTypes.node.isRequired
};

export default DropdownFooter;
