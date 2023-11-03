import * as React from "react";
import cx from "classnames";
import { InputHelper } from "./InputHelper";

const sizes = {
  md: "md",
  sm: "sm",
} as const;

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  valid?: boolean;
  invalid?: boolean;
  enhanceNativeSupport?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  size?: (typeof sizes)[keyof typeof sizes];
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

  const classNames = cx(`input input-${size}`, className, {
    "input-native": enhanceNativeSupport,
    "input-valid": valid,
    "input-invalid": invalid,
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
Input.sizes = sizes;
