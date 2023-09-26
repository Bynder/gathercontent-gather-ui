import React from "react";
import { defaultProps } from "./common";
import PillBase from "./PillBase";

function PillGreen({ className, children, ...rest }: any) {
  return (
    <PillBase
      className={`bg-green-90 text-green-primary font-semi-bold inherit-color-icon ${className}`}
      {...rest}
    >
      {children}
    </PillBase>
  );
}

PillGreen.defaultProps = defaultProps;

export default PillGreen;
