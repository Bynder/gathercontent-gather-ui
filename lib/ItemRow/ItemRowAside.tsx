import React from "react";

function ItemRowAside({ children, ...rest }: any) {
  return (
    <div className="gui-item-row__aside" {...rest}>
      {children}
    </div>
  );
}

export { ItemRowAside };
