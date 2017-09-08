import React, { PropTypes } from 'react';

const ModalColumn = props => (
  <div className={`modal__column ${props.className}`}>
    {props.children}
  </div>
);

ModalColumn.defaultProps = {
  className: '',
};

ModalColumn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ModalColumn;
