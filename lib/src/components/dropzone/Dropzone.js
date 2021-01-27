import React from 'react';
import { useDropzone } from 'react-dropzone';
import { ButtonPrimary } from '../../../ButtonNew/ButtonPrimary/ButtonPrimary';

function Dropzone({ onDrop, maxSize, children }) {
  const { getRootProps, getInputProps } = useDropzone({ onDrop, maxSize });

  return (
    <div {...getRootProps()} className="h-full p-4">
      <input {...getInputProps()} />
      {children || (
        <div className="h-full flex items-center flex-col justify-center border border-dashed border-neutral-80 rounded">
          <ButtonPrimary onClick={() => {}}>
            Browse my local files
          </ButtonPrimary>
          <p>or Drag and Drop here</p>
        </div>
      )}
    </div>
  );
}

export { Dropzone };
