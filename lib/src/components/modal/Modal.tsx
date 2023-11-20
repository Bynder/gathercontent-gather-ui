import React from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import ReactModal from "react-modal";
import { ModalFooter } from "./ModalFooter";
import { ModalHeader } from "./ModalHeader";
import { ModalBody } from "./ModalBody";
import { ModalFooterConfirm } from "./ModalFooterConfirm";

export function Modal({
  children,
  show,
  onHide,
  srContentLabel,
  size,
  keyboard,
  className,
}: any) {
  const appElement = document.getElementById("app-wrapper");

  if (appElement) {
    ReactModal.setAppElement(appElement);
  }

  return (
    <ReactModal
      className={`gui-Modal ${size} ${className}`}
      isOpen={show}
      closeTimeoutMS={300}
      onRequestClose={onHide}
      contentLabel={srContentLabel}
      shouldCloseOnEsc={keyboard}
      ariaHideApp={!!appElement}
    >
      <div className="gui-react-modal-inner">{children}</div>
    </ReactModal>
  );
}

Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.FooterConfirm = ModalFooterConfirm;
