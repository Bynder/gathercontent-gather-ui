import React from 'react';
import { Modal } from '../../components/modal/Modal';
import { Dropzone } from '../../components/dropzone/Dropzone';

export function ModalUploadBody({ fileCards, onDrop, maxSize }) {
  return (
    <Modal.Body className="h-screen70">
      <Dropzone onDrop={onDrop} maxSize={maxSize}>
        {fileCards}
      </Dropzone>
    </Modal.Body>
  );
}
