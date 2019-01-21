import React from 'react';
import PropTypes from 'prop-types';
import { Button, ProgressButton, Modal } from '../index';

const FormModal = ({
  children,
  title,
  submitText,
  submitHandler,
  cancelText,
  cancelHandler,
  formIsSubmitting,
  ...rest
}) => (
  <Modal.Container {...rest}>
    <form onSubmit={submitHandler}>
      <Modal.Header closeButton>{title}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button types={['link']} clickHandler={cancelHandler}>
          {cancelText}
        </Button>
        <ProgressButton
          buttonType="primary"
          value={submitText}
          clickHandler={e => e}
          isSubmit
          useShowSpinnerProp
          showSpinner={formIsSubmitting}
        />
      </Modal.Footer>
    </form>
  </Modal.Container>
);

FormModal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  submitText: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired,
  cancelText: PropTypes.string.isRequired,
  cancelHandler: PropTypes.func,
  formIsSubmitting: PropTypes.bool
};

FormModal.defaultProps = {
  formIsSubmitting: false,
  cancelHandler: () => {}
};

export default FormModal;
