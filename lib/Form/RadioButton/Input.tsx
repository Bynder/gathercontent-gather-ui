import React from "react";

function Input({
  onChangeHandler,
  className,
  label,
  id,
  checked,
  name,
  value,
  disabled,
}: any) {
  return (
    <input
      className={`form-radio__input ${className}`}
      type="radio"
      onChange={onChangeHandler}
      aria-label={label}
      id={id}
      name={name}
      value={value}
      disabled={disabled}
      checked={checked ?? false}
    />
  );
}

Input.defaultProps = {
  className: "",
  value: "",
  label: "",
  disabled: false,
  checked: undefined,
};

export default Input;
