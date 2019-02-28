import React from 'react';
import PropTypes from 'prop-types';

const SelectionBarAction = ({ children }) => (
  <div className="selection-bar__action">{children}</div>
);

SelectionBarAction.propTypes = {
  children: PropTypes.node.isRequired
};

export default SelectionBarAction;
