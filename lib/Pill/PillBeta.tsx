import React from "react";
import { defaultProps } from "./common";
import PillBase from "./PillBase";

export function PillBeta({ className, children, ...rest }: any) {
  return (
    <PillBase
      className={`bg-purple-60 text-white font-semi-bold inherit-color-icon ${className}`}
      {...rest}
    >
      {children}
    </PillBase>
  );
}

PillBeta.defaultProps = defaultProps;
