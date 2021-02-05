import React from 'react';
import { Modal } from '../../components/modal/Modal';
import { ModalUploadFooter } from './ModalUploadFooter';
import { ModalUploadBody } from './ModalUploadBody';
import { ModalUploadHeader } from './ModalUploadHeader';

export function ModalUpload({ show, children }) {
  return (
    <Modal show={show} size="large">
      {children}
    </Modal>
  );
}

ModalUpload.Footer = ModalUploadFooter;
ModalUpload.Header = ModalUploadHeader;
ModalUpload.Body = ModalUploadBody;
