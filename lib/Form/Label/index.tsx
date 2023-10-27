import React from "react";
import cx from "classnames";

function Label({
  label,
  id,
  subtitle,
  className,
  highlight,
  labelMouseEnter,
  labelMouseLeave,
  overrideLabelDefault,
  active,
  disabled,
  hinted,
}: any) {
  const labelClasses = cx(`gui-form-checkbox__label ${className}`, {
    "gui-is-disabled": disabled,
    "gui-form-checkbox__label--hinted": hinted,
  });

  const textElementClasses = cx("gui-form-input__text", {
    "gui-is-highlight": highlight,
    "gui-is-active": active,
  });

  const buttonElementClasses = cx({
    "gui-is-highlight": highlight,
  });

  const handleOnClick = () => {
    if (typeof overrideLabelDefault === "function") {
      overrideLabelDefault();
    }
  };

  if (overrideLabelDefault) {
    return (
      <button
        type="button"
        className={`gui-form-checkbox__label--button ${className} ${buttonElementClasses}`}
        onClick={handleOnClick}
        onMouseEnter={labelMouseEnter}
        onMouseLeave={labelMouseLeave}
      >
        <span className={textElementClasses}>{label}</span>
        {subtitle && (
          <span className="gui-form-checkbox__subtitle">{subtitle}</span>
        )}
      </button>
    );
  }
  return (
    <label htmlFor={id} className={labelClasses}>
      <span className={textElementClasses}>{label}</span>
      {subtitle && (
        <span className="gui-form-checkbox__subtitle">{subtitle}</span>
      )}
    </label>
  );
}

Label.defaultProps = {
  subtitle: "",
  className: "",
  highlight: false,
  overrideLabelDefault: false,
  labelMouseEnter: () => {},
  labelMouseLeave: () => {},
  active: false,
  disabled: false,
  hinted: false,
};

export default Label;
