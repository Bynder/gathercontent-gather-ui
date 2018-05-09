import React from 'react';
import PropTypes from 'prop-types';

const ListItemText = ({ children }) => (
  <div className="list__item-text">{children}</div>
);

ListItemText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape(),
    PropTypes.node
  ]).isRequired
};

export default ListItemText;
