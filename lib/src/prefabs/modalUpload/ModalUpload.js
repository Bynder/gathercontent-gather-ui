import React from 'react';
import { Modal } from '../../components/modal/Modal';
import { ModalUploadBody } from './ModalUploadBody';

export function ModalUpload({ children, ...rest }) {
  return (
    <Modal {...rest} size="large">
      {children}
    </Modal>
  );
}

ModalUpload.Footer = Modal.FooterConfirm;
ModalUpload.Header = Modal.Header;
ModalUpload.Body = ModalUploadBody;
