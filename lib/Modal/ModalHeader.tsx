import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NewModal } from "lib";
import { LegacyModalContext } from "./Modal";

function ModalHeader({ children, text, ...rest }: any) {
  const { onHide }: any = useContext(LegacyModalContext);

  return (
    <NewModal.Header
      onCloseClick={onHide}
      headerText={children}
      className="modal-header"
      {...rest}
    >
      {text && <p className="modal__header-intro">{text}</p>}
    </NewModal.Header>
  );
}

ModalHeader.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
};

ModalHeader.defaultProps = {
  children: null,
  text: null,
};

export default ModalHeader;