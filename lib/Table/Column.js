import React from 'react';

const Column = props =>
  <span className={props.className}>
    {props.children}
  </span>;

Column.propTypes = {
  className: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
};

export default Column;
