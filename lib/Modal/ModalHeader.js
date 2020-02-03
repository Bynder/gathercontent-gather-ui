import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/lib/Modal';
import Button from '../Button';

const ModalHeader = ({ children, text, action, ...props }) => (
  <Modal.Header {...props}>
    <div className="modal-header-inner">
      <div className="modal-header-inner__title-wrapper">
        <Modal.Title>{children}</Modal.Title>
        {action && (
          <Button types={['link-default']} onClick={action.onClick}>
            {action.text}
          </Button>
        )}
      </div>
      {text && <p className="modal__header-intro">{text}</p>}
    </div>
  </Modal.Header>
);

ModalHeader.propTypes = {
  children: PropTypes.node,
  closeButton: PropTypes.bool,
  text: PropTypes.string,
  action: PropTypes.shape({ text: PropTypes.string, onClick: PropTypes.func })
};

ModalHeader.defaultProps = {
  children: null,
  closeButton: true,
  text: null,
  action: null
};

export default ModalHeader;
