import * as React from "react";
import cx from "classnames";
import { InputHelper } from "./InputHelper";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  valid?: boolean;
  invalid?: boolean;
  enhanceNativeSupport?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
}

export function Input({
  id,
  className = "",
  valid = false,
  invalid = false,
  enhanceNativeSupport = false,
  size,
  value = "",
  onChange,
  inputRef,
  ...rest
}: Props) {
  const [_value, setValue] = React.useState(value);

  const classNames = cx(`gui-input gui-input-${size}`, className, {
    "gui-input-native": enhanceNativeSupport,
    "gui-input-valid": valid,
    "gui-input-invalid": invalid,
  });

  React.useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <input
      id={id}
      value={_value}
      className={classNames}
      onChange={(e) => {
        if (onChange) {
          onChange(e);
        }
        setValue(e.target.value);
      }}
      ref={inputRef}
      {...rest}
    />
  );
}

Input.Helper = InputHelper;

const sizes = {
  md: "md",
  sm: "sm",
};

Input.sizes = sizes;
