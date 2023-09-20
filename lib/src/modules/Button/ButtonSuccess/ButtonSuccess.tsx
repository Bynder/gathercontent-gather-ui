import * as React from "react";
import { ButtonBase } from "../ButtonBase";
import { defaultProps, sizes } from "../common";

export function ButtonSuccess({ children, className = "", ...rest }: any) {
  return (
    <ButtonBase className={`button-success ${className}`} {...rest}>
      {children}
    </ButtonBase>
  );
}

ButtonSuccess.defaultProps = defaultProps;

ButtonSuccess.sizes = sizes;
