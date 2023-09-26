import React from "react";

function ModalColumn(props: any) {
  return (
    <div className={`modal__column ${props.className}`}>{props.children}</div>
  );
}

ModalColumn.defaultProps = {
  className: "",
};

export default ModalColumn;
