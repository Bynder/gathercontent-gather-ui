import React from 'react';
import PropTypes from 'prop-types';
import { Button, ProgressButton, Modal } from '../index';

const ConfirmationModal = ({ title, message, submitText, type, cancelText, submitCallback, ...rest }) => (
  <Modal.Container {...rest}>
    <form onSubmit={submitCallback}>
      <Modal.Header closeButton>
        { title }
      </Modal.Header>
      <Modal.Body>
        { message }
      </Modal.Body>
      <Modal.Footer>
        <Button
          types={['link']}
          clickHandler={rest.onHide}
        >
          { cancelText }
        </Button>
        <ProgressButton
          type={type}
          value={submitText}
          clickHandler={e => e}
          isSubmit
        />
      </Modal.Footer>
    </form>
  </Modal.Container>
);

ConfirmationModal.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  submitText: PropTypes.string.isRequired,
  submitCallback: PropTypes.func.isRequired,
  cancelText: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  type: PropTypes.string,
};

ConfirmationModal.defaultProps = {
  type: 'primary',
};

export default ConfirmationModal;
