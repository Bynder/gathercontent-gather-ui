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
  const classNames = cx(props.className, "gui-legacy-modal", {
    "gui-modal--small": size === "small",
    "gui-modal--large": size === "large",
    "gui-modal--x-large": size === "x-large",
    "gui-modal--full-screen": size === "full-screen",
    "gui-modal--highlight": highlight,
    "gui-modal--overflow": overflow,
    "gui-modal--overflow-half": overflowHalf,
    "gui-modal--media-only": mediaOnly,
    "gui-modal--collapse": collapse,
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
