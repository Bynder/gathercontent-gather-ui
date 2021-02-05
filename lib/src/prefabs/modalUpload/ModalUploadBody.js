import React from 'react';
import { Modal } from '../../components/modal/Modal';
import { Dropzone } from '../../components/dropzone/Dropzone';

export function ModalUploadBody({ uploaderFiles, onDrop, maxSize }) {
  return (
    <Modal.Body className="h-screen70">
      <Dropzone onDrop={onDrop} maxSize={maxSize}>
        {uploaderFiles}
      </Dropzone>
    </Modal.Body>
  );
}
