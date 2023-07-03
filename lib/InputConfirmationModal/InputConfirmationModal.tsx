import React, { useState } from "react";
import { node, string, bool, func, oneOfType } from "prop-types";
import {
  Modal,
  FormInput,
  ButtonPrimaryDanger,
  ButtonTertiary,
  ButtonSecondary,
} from "lib";

export function InputConfirmationModal({
  onHide,
  show,
  introTitle,
  confirmTitle,
  introBody,
  confirmBody,
  buttonText,
  confirmKeyword,
  onConfirm,
  className,
  loading,
  skipConfirm,
  ...rest
}: any) {
  const [value, setValue] = useState("");
  const [showIntro, setShowIntro] = useState(true);

  const disableButton = (!skipConfirm && value !== confirmKeyword) || loading;

  return (
    <Modal.Container
      className={`modal--clear modal--input-confirm ${className}`}
      show={show}
      onHide={onHide}
      {...rest}
    >
      <Modal.Header>{showIntro ? introTitle : confirmTitle}</Modal.Header>
      <Modal.Body>
        {showIntro ? (
          introBody
        ) : (
          <>
            {confirmBody}
            <FormInput
              className="mt-3 w-64"
              value={value}
              onInputChange={setValue}
              placeholder={`Type ${confirmKeyword} to confirm`}
            />
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <ButtonTertiary className="mr-2" onClick={onHide}>
          Cancel
        </ButtonTertiary>
        {showIntro && !skipConfirm ? (
          <ButtonSecondary onClick={() => setShowIntro(false)}>
            Confirm
          </ButtonSecondary>
        ) : (
          <ButtonPrimaryDanger
            onClick={onConfirm}
            disabled={disableButton}
            loading={loading}
          >
            {buttonText}
          </ButtonPrimaryDanger>
        )}
      </Modal.Footer>
    </Modal.Container>
  );
}

InputConfirmationModal.propTypes = {
  onHide: func,
  show: bool,
  introTitle: string.isRequired,
  confirmTitle: string.isRequired,
  introBody: oneOfType([string, node]).isRequired,
  confirmBody: oneOfType([string, node]).isRequired,
  buttonText: string,
  confirmKeyword: string,
  onConfirm: func.isRequired,
  className: string,
  loading: bool,
  skipConfirm: bool,
};

InputConfirmationModal.defaultProps = {
  onHide: () => {},
  show: false,
  buttonText: "Delete",
  confirmKeyword: "DELETE",
  className: "",
  loading: false,
  skipConfirm: false,
};

export default InputConfirmationModal;
