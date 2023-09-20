import React, { ButtonHTMLAttributes, useState } from "react";
import { createClassesFromTypesList } from "../helpers/classes";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  types?: string[];
  disableOnClick?: boolean;
  isSubmit?: boolean;
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function Button({
  disableOnClick = false,
  isSubmit = false,
  onClick,
  onKeyDown,
  className = "",
  clickHandler,
  children,
  id,
  title,
  onMouseEnter,
  onMouseLeave,
  types = ["primary"],
  disabled,
}: Props) {
  const [disabledAfterClick, setDisabledAfterClick] = useState(false);
  const handleOnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setDisabledAfterClick(disableOnClick);

    if (onClick) {
      return onClick(e);
    }
    if (clickHandler) {
      return clickHandler(e);
    }
    return e;
  };

  const shareProps = {
    disabled: disabled || disabledAfterClick,
    onClick: handleOnClick,
    onKeyDown,
    className: `button ${createClassesFromTypesList(
      types,
      "button--"
    )} ${className}`,
    title,
    id,
    onMouseEnter,
    onMouseLeave,
  };

  return (
    <button type={isSubmit ? "submit" : "button"} {...shareProps}>
      {children}
    </button>
  );
}

export default Button;
