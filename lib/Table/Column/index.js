import React, { PropTypes } from 'react';

const Column = props =>
  <span className={props.className}>
    {props.children}
  </span>;

Column.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Column;
