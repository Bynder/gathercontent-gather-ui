import React from 'react';
import { Modal } from '../../components/modal/Modal';
import { Dropzone } from '../../components/dropzone/Dropzone';

export function ModalUploadBody({ fileCards, onDrop, maxSize }) {
  return (
    <Modal.Body className="h-screen70 border border-solid border-neutral-90 border-r-0 border-l-0">
      <Dropzone onDrop={onDrop} maxSize={maxSize}>
        {fileCards}
      </Dropzone>
    </Modal.Body>
  );
}
