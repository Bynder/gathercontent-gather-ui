import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import ProgressButton from "../ProgressButton";
import Modal from "../Modal";

interface Props {
  title: string;
  children: ReactNode;
  submitText: string;
  submitHandler: () => void;
  cancelText: string;
  onHide: () => void;
  formIsSubmitting?: boolean;
  show?: boolean;
}

export function FormModal({
  children,
  title,
  submitText,
  submitHandler,
  cancelText,
  formIsSubmitting,
  ...rest
}: Props) {
  return (
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
}

FormModal.defaultProps = {
  formIsSubmitting: false,
};

export default FormModal;
