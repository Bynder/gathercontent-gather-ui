import React from 'react';
import PropTypes from 'prop-types';

const DropdownItemGroup = ({ children }) => (
  <div className="dropdown__item-group">{children}</div>
);

DropdownItemGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default DropdownItemGroup;
