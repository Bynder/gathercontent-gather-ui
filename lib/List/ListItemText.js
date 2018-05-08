import React from 'react';
import PropTypes from 'prop-types';

const ListItemText = ({ children }) => (
  <div className="list__item-text">{children}</div>
);

ListItemText.propTypes = {
  children: PropTypes.string.isRequired
};

export default ListItemText;
