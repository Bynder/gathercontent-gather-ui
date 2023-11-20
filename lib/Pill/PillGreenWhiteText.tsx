import React from "react";
import { defaultProps } from "./common";
import PillBase from "./PillBase";

function PillGreenWhiteText({ className, children, ...rest }: any) {
  return (
    <PillBase
      className={`bg-green-primary text-white font-semi-bold gui-inherit-color-icon ${className}`}
      {...rest}
    >
      {children}
    </PillBase>
  );
}

PillGreenWhiteText.defaultProps = defaultProps;

export default PillGreenWhiteText;
