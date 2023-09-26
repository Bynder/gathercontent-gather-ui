import React from "react";
import { defaultProps } from "./common";
import PillBase from "./PillBase";

function PillPurple({ className, children, ...rest }: any) {
  return (
    <PillBase
      className={`bg-purple-90 text-purple-primary font-semi-bold inherit-color-icon ${className}`}
      {...rest}
    >
      {children}
    </PillBase>
  );
}

PillPurple.defaultProps = defaultProps;

export default PillPurple;
