import React from 'react';
import { Modal } from '../../components/modal/Modal';

export function ModalUploadHeader({ onCloseClick }) {
  return <Modal.Header headerText="Add files" onCloseClick={onCloseClick} />;
}
