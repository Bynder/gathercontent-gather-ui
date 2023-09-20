import React, { ReactNode } from "react";
import { NewModal } from "lib";

interface Props {
  children: ReactNode | JSX.Element;
  className?: string;
}

function ModalBody({ children, className = "", ...rest }: Props) {
  return (
    <NewModal.Body className={`modal-body ${className}`} {...rest}>
      {children}
    </NewModal.Body>
  );
}

export default ModalBody;
