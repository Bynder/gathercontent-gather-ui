import React from "react";

export function Header({ children, className, ...rest }: any) {
  return (
    <header className={`gui-layout-header ${className}`} {...rest}>
      {children}
    </header>
  );
}

Header.defaultProps = {
  className: "",
};
