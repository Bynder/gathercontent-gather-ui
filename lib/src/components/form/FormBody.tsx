import * as React from "react";

export function FormBody({ children, className = "", ...rest }: any) {
  return (
    <div className={`gui-form-body ${className}`} {...rest}>
      {children}
    </div>
  );
}
