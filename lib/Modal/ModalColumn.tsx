import React from 'react';
import PropTypes from 'prop-types';

function ModalColumn(props: any) {
  return <div className={`modal__column ${props.className}`}>{props.children}</div>
}

ModalColumn.defaultProps = {
  className: ''
};

ModalColumn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default ModalColumn;
