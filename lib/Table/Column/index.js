import React, { PropTypes } from 'react';

const TableColumn = props =>
  (<span className={props.className}>
    {props.children}
  </span>);

TableColumn.defaultProps = {
  className: '',
};

TableColumn.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default TableColumn;
