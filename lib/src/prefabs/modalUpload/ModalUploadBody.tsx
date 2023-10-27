import React from "react";
import { Modal } from "../../components/modal/Modal";
import { Dropzone } from "../../components/dropzone/Dropzone";

export function ModalUploadBody({
  fileCards,
  onDrop,
  maxSize,
  dropzoneProps,
  ...rest
}: any) {
  return (
    <Modal.Body className="gui-modal-upload-body" {...rest}>
      <Dropzone onDrop={onDrop} maxSize={maxSize} {...dropzoneProps}>
        {fileCards}
      </Dropzone>
    </Modal.Body>
  );
}

ModalUploadBody.defaultProps = {
  dropzoneProps: {},
};
