import React, { useState } from "react";
import cx from "classnames";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  focusOnMount?: boolean;
  onInputChange?: (value: string) => void;
  noBorder?: boolean;
  paddingSmall?: boolean;
  fullWidth?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  collapse?: boolean;
}

export function FormInput({
  type = "text",
  focusOnMount,
  value = "",
  placeholder,
  className = "",
  onInputChange,
  noBorder,
  paddingSmall,
  fullWidth,
  hasError,
  errorMessage,
  disabled,
  collapse,
  ...rest
}: Props) {
  const [inputValue, setInputValue] = useState(value);

  const handleOnChange = (e: any) => {
    setInputValue(e.target.value);
    if (onInputChange) {
      onInputChange(e.target.value);
    }
  };

  const classNames = cx(`form__input ${className}`, {
    "form__input--noborder": noBorder,
    "form__input--full-width": fullWidth,
    "form__input--padding-small": paddingSmall,
    "form__input--has-error": hasError,
    "form__input--display-error": hasError && errorMessage,
    "form__input--collapse": collapse,
  });

  return (
    <>
      <input
        type={type}
        value={inputValue}
        onChange={handleOnChange}
        className={classNames}
        placeholder={placeholder}
        autoFocus={focusOnMount} // eslint-disable-line jsx-a11y/no-autofocus
        aria-invalid={hasError}
        disabled={disabled}
        {...rest}
      />
      {hasError && errorMessage && (
        <span role="alert" className="form-input__error-message">
          {errorMessage}
        </span>
      )}
    </>
  );
}

export default FormInput;
