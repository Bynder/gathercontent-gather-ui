import React, { useContext } from "react";
import { NewModal } from "lib";
import { LegacyModalContext } from "./Modal";

function ModalHeader({ children, text, ...rest }: any) {
  const { onHide }: any = useContext(LegacyModalContext);

  return (
    <NewModal.Header
      onCloseClick={onHide}
      headerText={children}
      className="gui-modal-header"
      {...rest}
    >
      {text && <p className="gui-modal__header-intro">{text}</p>}
    </NewModal.Header>
  );
}

ModalHeader.defaultProps = {
  children: null,
  text: null,
};

export default ModalHeader;
