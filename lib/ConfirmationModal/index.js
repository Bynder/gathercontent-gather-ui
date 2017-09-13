import React from 'react';
import PropTypes from 'prop-types';
import { Button, ProgressButton, Modal } from '../index';

const ConfirmationModal = ({ title, children, submitText, buttonType, cancelText, submitCallback, callbackCanExecute, ...rest }) => (
  <Modal.Container {...rest}>
    <form onSubmit={submitCallback}>
      <Modal.Header closeButton>
        { title }
      </Modal.Header>
      <Modal.Body>
        { children }
      </Modal.Body>
      <Modal.Footer>
        <Button
          types={['link']}
          clickHandler={rest.onHide}
        >
          { cancelText }
        </Button>
        <ProgressButton
          buttonType={buttonType}
          value={submitText}
          clickHandler={() => {}}
          callbackCanExecute={callbackCanExecute}
          isSubmit
        />
      </Modal.Footer>
    </form>
  </Modal.Container>
);

ConfirmationModal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  submitText: PropTypes.string.isRequired,
  submitCallback: PropTypes.func.isRequired,
  cancelText: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  buttonType: PropTypes.string,
  callbackCanExecute: PropTypes.bool,
};

ConfirmationModal.defaultProps = {
  buttonType: 'primary',
  callbackCanExecute: true,
};

export default ConfirmationModal;
