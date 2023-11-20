import * as React from "react";

export function CardDescription({ children, className = "", ...rest }: any) {
  return (
    <div className={`gui-card-description ${className}`} {...rest}>
      {children}
    </div>
  );
}
