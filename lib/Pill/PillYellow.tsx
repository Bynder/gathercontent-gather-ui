import React from "react";
import { defaultProps } from "./common";
import PillBase from "./PillBase";

function PillYellow({ className, children, ...rest }: any) {
  return (
    <PillBase
      className={`bg-yellow-primary text-neutral-20 font-semi-bold inherit-color-icon ${className}`}
      {...rest}
    >
      {children}
    </PillBase>
  );
}

PillYellow.defaultProps = defaultProps;

export default PillYellow;
