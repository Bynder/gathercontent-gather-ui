import * as React from "react";
import { ButtonTertiary } from "lib";

export function FormCancelButton({ children, className = "", ...rest }: any) {
  return (
    <ButtonTertiary className={`gui-form-cancel-button ${className}`} {...rest}>
      {children}
    </ButtonTertiary>
  );
}

FormCancelButton.defaultProps = {
  children: "Cancel",
};
