import React, { createContext } from "react";
import { NewModal } from "lib";
import cx from "classnames";

export const LegacyModalContext = createContext({});

function Modal(props: any) {
  const {
    size,
    highlight,
    overflow,
    overflowHalf,
    mediaOnly,
    collapse,
    ...rest
  } = props;
  const classNames = cx(props.className, "legacy-modal", {
    "modal--small": size === "small",
    "modal--large": size === "large",
    "modal--x-large": size === "x-large",
    "modal--full-screen": size === "full-screen",
    "modal--highlight": highlight,
    "modal--overflow": overflow,
    "modal--overflow-half": overflowHalf,
    "modal--media-only": mediaOnly,
    "modal--collapse": collapse,
  });

  const sharedState = {
    onHide: props.onHide,
  };

  return (
    <LegacyModalContext.Provider value={sharedState}>
      <NewModal {...rest} className={classNames}>
        {props.children}
      </NewModal>
    </LegacyModalContext.Provider>
  );
}

Modal.defaultProps = {
  size: "",
  className: "",
  overflow: false,
  overflowHalf: false,
  mediaOnly: false,
  collapse: false,
  highlight: false,
};

export default Modal;
