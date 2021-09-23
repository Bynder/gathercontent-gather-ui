import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NewModal } from 'lib';
import { LegacyModalContext } from './Modal';

const ModalHeader = ({ children, text, ...rest }) => {
  const { onHide } = useContext(LegacyModalContext);
  return (
    <NewModal.Header
      onCloseClick={onHide}
      headerText={children}
      className="modal-header"
      {...rest}
    >
      {text && <p className="modal__header-intro">{text}</p>}
    </NewModal.Header>
  );
};

ModalHeader.propTypes = {
  children: PropTypes.node,
  closeButton: PropTypes.bool,
  text: PropTypes.string
};

ModalHeader.defaultProps = {
  children: null,
  closeButton: true,
  text: null
};

export default ModalHeader;
