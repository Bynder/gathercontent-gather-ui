import React from "react";
import PropTypes from "prop-types";
import { Form } from "../src/components/form/Form";
import Button from "../Button";
import ProgressButton from "../ProgressButton";
import Modal from "../Modal";

export function ConfirmationModal({
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
  showSpinner,
  useShowSpinnerProp,
  extraButtons,
  ...rest
}: any) {
  return <Modal.Container {...rest}>
    {/* @ts-expect-error TS(2322): Type '{ children: Element[]; onSubmit: (event: any... Remove this comment to see the full error message */}
    <Form
      onSubmit={(event: any) => {
        submitCallback(event);
      }}
    >
      <Modal.Header text={introText}>{title}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer text={footerContent}>
        <Button types={["link"]} clickHandler={rest.onHide}>
          {cancelText}
        </Button>
        {extraButtons}
        <ProgressButton
          buttonType={buttonType}
          value={submitText}
          clickHandler={() => {}}
          callbackCanExecute={callbackCanExecute}
          disabled={disabled}
          isSubmit
          showSpinner={showSpinner}
          useShowSpinnerProp={useShowSpinnerProp}
        />
      </Modal.Footer>
    </Form>
  </Modal.Container>
}

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
  disabled: PropTypes.bool,
  showSpinner: PropTypes.bool,
  useShowSpinnerProp: PropTypes.bool,
};

ConfirmationModal.defaultProps = {
  buttonType: "primary",
  introText: null,
  callbackCanExecute: true,
  footerContent: null,
  disabled: false,
  showSpinner: false,
  useShowSpinnerProp: false,
};

export default ConfirmationModal;
