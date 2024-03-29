import React, { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLElement> {
  collapse?: boolean;
}

function DropdownFooter({ children, ...rest }: Props) {
  return (
    <footer className="gui-dropdown__footer" {...rest}>
      {children}
    </footer>
  );
}

export default DropdownFooter;
