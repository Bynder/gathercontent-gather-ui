import React from "react";
import ModalHeader from "./ModalHeader";

function ImageHeader({ imageUrl, height, ...props }: any) {
  return (
    <ModalHeader
      className="bg-contain bg-center bg-no-repeat rounded-t"
      style={{ backgroundImage: `url(${imageUrl})`, height: `${height}px` }}
      {...props}
    />
  );
}

export { ImageHeader };
