import React from "react";
import { defaultProps } from "./common";
import PillBase from "./PillBase";

function PillRed({ className, children, ...rest }: any) {
  return (
    <PillBase
      className={`bg-red-95 border-2 border-solid border-red-primary text-red-primary gui-inherit-color-icon ${className}`}
      {...rest}
    >
      {children}
    </PillBase>
  );
}

PillRed.defaultProps = defaultProps;

export default PillRed;
