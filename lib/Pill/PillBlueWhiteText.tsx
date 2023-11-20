import React from "react";
import { defaultProps } from "./common";
import PillBase from "./PillBase";

function PillBlueWhiteText({ className, children, ...rest }: any) {
  return (
    <PillBase
      className={`bg-blue-primary text-white font-semi-bold gui-inherit-color-icon ${className}`}
      {...rest}
    >
      {children}
    </PillBase>
  );
}

PillBlueWhiteText.defaultProps = defaultProps;

export default PillBlueWhiteText;
