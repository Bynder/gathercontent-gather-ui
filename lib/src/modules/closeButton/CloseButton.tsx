import React from "react";
import { ButtonIcon } from "lib";

export function CloseButton({ onClick }: any) {
  return (
    <ButtonIcon onClick={onClick} name="cross" className="gui-close-button" />
  );
}
