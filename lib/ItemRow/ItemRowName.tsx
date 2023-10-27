import React from "react";

function ItemRowName({ children, ...props }: any) {
  return (
    <div className="gui-item-row__name" {...props}>
      {children}
    </div>
  );
}

export { ItemRowName };
