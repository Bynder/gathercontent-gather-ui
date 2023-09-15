import React, { useEffect } from "react";
import cx from "classnames";

interface Props extends React.FormHTMLAttributes<HTMLFormElement> {
  onCancel?: () => void;
  escToClose?: boolean;
  disabled?: boolean;
}

export function Form({
  onSubmit = () => {},
  children,
  onCancel = () => {},
  escToClose = false,
  className = "",
  disabled,
  ...rest
}: Props) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(e);
  };

  const handleKeyDown = (e: any) => {
    if (escToClose && e.keyCode === 27) {
      onCancel();
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    return () => {
      document.removeEventListener("keydown", handleKeyDown, false);
    };
  });

  const classNames = cx(className, { "form--disabled": disabled });

  return (
    <form onSubmit={handleSubmit} className={classNames} {...rest}>
      {children}
    </form>
  );
}

export default Form;
