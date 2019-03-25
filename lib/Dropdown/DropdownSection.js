import React from 'react';
import PropTypes from 'prop-types';

const DropdownSection = ({ children }) => {
  return <div className="dropdown__section">{children}</div>;
};

DropdownSection.propTypes = {
  children: PropTypes.node.isRequired
};

export default DropdownSection;
