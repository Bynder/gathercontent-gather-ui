import React from 'react';
import PropTypes from 'prop-types';
import { NewModal } from 'lib';

const ModalHeader = ({ children, text, useTitle, ...props }) => (
  <NewModal.Header {...props}>
    <div className="modal-header-inner">
      {useTitle ? <span>{children}</span> : children}
      {text && <p className="modal__header-intro">{text}</p>}
    </div>
  </NewModal.Header>
);

ModalHeader.propTypes = {
  children: PropTypes.node,
  closeButton: PropTypes.bool,
  text: PropTypes.string,
  useTitle: PropTypes.bool
};

ModalHeader.defaultProps = {
  children: null,
  closeButton: true,
  text: null,
  useTitle: true
};

export default ModalHeader;
