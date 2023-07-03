import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import ProgressButton from "../ProgressButton";
import Modal from "../Modal";

export const FormModal = ({
  children,
  title,
  submitText,
  submitHandler,
  cancelText,
  formIsSubmitting,
  ...rest
}: any) => (
  <Modal.Container {...rest}>
    <form onSubmit={submitHandler}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button types={["link"]} clickHandler={rest.onHide}>
          {cancelText}
        </Button>
        <ProgressButton
          buttonType="primary"
          value={submitText}
          clickHandler={(e) => e}
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
  onHide: PropTypes.func.isRequired,
  formIsSubmitting: PropTypes.bool,
};

FormModal.defaultProps = {
  formIsSubmitting: false,
};

export default FormModal;
