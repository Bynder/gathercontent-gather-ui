import React from 'react';
import { Modal as NewModal } from 'lib';
import { Modal } from '../../components/modal/Modal';
import { ModalUploadBody } from './ModalUploadBody';

export function ModalUpload({ children, ...rest }: any) {
  return (
    <NewModal.Container {...rest} size="large">
      {children}
    </NewModal.Container>
  );
}

ModalUpload.Footer = Modal.FooterConfirm;
ModalUpload.Header = NewModal.Header;
ModalUpload.Body = ModalUploadBody;
