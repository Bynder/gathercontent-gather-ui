import React from 'react';
import PropTypes from 'prop-types';

const DropdownHeader = ({ children }) => {
  return <header className="dropdown__header">{children}</header>;
};

DropdownHeader.propTypes = {
  children: PropTypes.node.isRequired
};

export default DropdownHeader;
