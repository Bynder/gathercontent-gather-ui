import React, { PropTypes } from 'react';

const ModalColumn = props =>
  <div className={`modal__column ${props.className}`}>
    {props.children}
  </div>;

ModalColumn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default ModalColumn;
