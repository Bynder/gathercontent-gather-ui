import React, { PropTypes } from 'react';

const ModalContent = props =>
  <div className={`modal__content ${props.className}`}>
    {props.children}
  </div>;

ModalContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
};

export default ModalContent;
