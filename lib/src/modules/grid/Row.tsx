import * as React from "react";

export function Row({ children, className = "", ...rest }: any) {
  return (
    <div className={`gui-layout-row flex ${className}`} {...rest}>
      {children}
    </div>
  );
}
