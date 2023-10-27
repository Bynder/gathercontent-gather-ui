import React from "react";

function ItemRowData({ children, ...rest }: any) {
  return (
    <div className="gui-item-row__data" {...rest}>
      {children}
    </div>
  );
}

export { ItemRowData };
