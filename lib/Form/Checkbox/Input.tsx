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
      type="checkbox"
      onChange={onChangeHandler}
      aria-label={label}
      id={id}
      name={name}
      checked={checked}
      value={value}
      disabled={disabled}
    />
  );
}

Input.defaultProps = {
  label: "",
  className: "",
  value: "",
  disabled: false,
};

export default Input;
