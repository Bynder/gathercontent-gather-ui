import React from 'react';
import { Modal } from '../../components/modal/Modal';

export function ModalUploadFooter({
  onCloseClick,
  onUploadClick,
  footerText,
  disableSubmit,
  submitButtonText
}) {
  return (
    <Modal.FooterConfirm
      tertiaryText="Cancel"
      tertiaryOnClick={onCloseClick}
      secondaryText={submitButtonText}
      secondaryOnClick={onUploadClick}
      confirmText={footerText}
      disableSecondary={disableSubmit}
    />
  );
}
