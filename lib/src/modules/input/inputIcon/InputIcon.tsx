import * as React from "react";
import { Icon } from "lib";
import { Input } from "../Input";

export function InputIcon({
  children,
  className = "",
  iconName,
  ...rest
}: any) {
  return (
    <span className={`input-icon ${className}`}>
      <Icon name={iconName} />
      <Input {...rest} />
    </span>
  );
}
