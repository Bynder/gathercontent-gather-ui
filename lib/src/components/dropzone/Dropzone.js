import React from 'react';
import { useDropzone } from 'react-dropzone';
import { ButtonPrimary } from '../../../ButtonNew/ButtonPrimary/ButtonPrimary';

function Dropzone({ onDrop, maxSize, children, ...rest }) {
  const onDropzoneDrop = acceptedFiles => {
    onDrop(
      acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file)
        })
      )
    );
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDropzoneDrop,
    maxSize,
    noClick: !!children,
    multiple: true,
    ...rest
  });

  return (
    <div {...getRootProps()} className="h-full p-4">
      <input {...getInputProps()} />
      {children || (
        <div className="h-full flex items-center flex-col justify-center border border-dashed border-neutral-80 rounded">
          <ButtonPrimary onClick={() => {}}>
            Browse my local files
          </ButtonPrimary>
          <p>or drag and drop here</p>
        </div>
      )}
    </div>
  );
}

export { Dropzone };
