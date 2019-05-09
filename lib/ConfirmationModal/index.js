import React from 'react';
import PropTypes from 'prop-types';
import { Button, ProgressButton, Modal } from '../index';

const ConfirmationModal = ({
  title,
  introText,
  children,
  submitText,
  buttonType,
  cancelText,
  submitCallback,
  callbackCanExecute,
  footerContent,
  disabled,
  ...rest
}) => (
  <Modal.Container {...rest}>
    <form onSubmit={submitCallback}>
      <Modal.Header closeButton text={introText}>
        {title}
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer text={footerContent}>
        <Button types={['link']} clickHandler={rest.onHide}>
          {cancelText}
        </Button>
        <ProgressButton
          buttonType={buttonType}
          value={submitText}
          clickHandler={() => {}}
          callbackCanExecute={callbackCanExecute}
          disabled={disabled}
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
  introText: PropTypes.string,
  callbackCanExecute: PropTypes.bool,
  footerContent: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool
};

ConfirmationModal.defaultProps = {
  buttonType: 'primary',
  introText: null,
  callbackCanExecute: true,
  footerContent: null,
  disabled: false
};

export default ConfirmationModal;
