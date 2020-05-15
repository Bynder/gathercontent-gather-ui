import React from 'react';
import { string, number } from 'prop-types';
import ModalHeader from './ModalHeader';

const ImageHeader = ({ imageUrl, height, ...props }) => (
  <ModalHeader
    className="bg-contain bg-center bg-no-repeat rounded-t"
    style={{ backgroundImage: `url(${imageUrl})`, height: `${height}px` }}
    {...props}
  />
);

ImageHeader.propTypes = {
  imageUrl: string.isRequired,
  height: number.isRequired
};

export { ImageHeader };
