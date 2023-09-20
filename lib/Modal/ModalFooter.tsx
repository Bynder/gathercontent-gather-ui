import React from "react";
import cx from "classnames";
import { NewModal } from "lib";

function ModalFooter({
  children,
  text,
  spaceBetween,
  className,
  ...props
}: any) {
  const containerClassName = cx(className, "modal-footer", {
    "modal-footer--space-between": spaceBetween,
  });

  return (
    <NewModal.Footer className={containerClassName} {...props}>
      {text && <span className="modal__footer-text">{text}</span>}

      {children}
    </NewModal.Footer>
  );
}

ModalFooter.defaultProps = {
  text: null,
  spaceBetween: false,
  className: "",
};

export default ModalFooter;
