import React from 'react';
import PropTypes from 'prop-types';

const DropdownActionGroup = ({ children }) => (
  <div className="dropdown__action-group">{children}</div>
);

DropdownActionGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default DropdownActionGroup;
