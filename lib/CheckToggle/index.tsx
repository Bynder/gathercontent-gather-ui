import React, { ReactNode, useState } from "react";
import cx from "classnames";

interface Props {
  labelLeft?: string | ReactNode;
  labelRight?: string | ReactNode;
  clickHandler?: () => void;
  checked?: boolean;
  className?: string;
  displaySmall?: boolean;
  displayChecked?: boolean;
  autoToggle?: boolean;
  spaceBetween?: boolean;
  disabled?: boolean;
  labelSizeLarge?: boolean;
  marginSizeLarge?: boolean;
  toggleClasses?: string;
  id?: string;
}

export function CheckToggle({
  id,
  labelLeft,
  labelRight,
  clickHandler,
  checked = false,
  className = "",
  displaySmall,
  displayChecked,
  autoToggle = true,
  spaceBetween,
  disabled,
  labelSizeLarge,
  marginSizeLarge,
  toggleClasses = "",
}: Props) {
  const [checkedState, setCheckedState] = useState(checked);
  const onClickHandler = () => {
    if (clickHandler) {
      clickHandler();
    }
    setCheckedState(!checkedState);
  };

  const isChecked = autoToggle ? checkedState : checked;

  const wrapperClasses = cx(`gui-toggle-wrapper ${className}`, {
    "gui-size-small": displaySmall,
    "gui-is-checked": displayChecked && isChecked,
    "gui-h-justify-content-space-between": spaceBetween,
    "gui-margin-large": marginSizeLarge,
    "gui-disabled": disabled,
  });

  const switchLabelClasses = cx("gui-toggle-switch__label", {
    "gui-label-size-large": labelSizeLarge,
  });

  const wrapperLabelClasses = cx("gui-toggle-wrapper__label", {
    "gui-label-size-large": labelSizeLarge,
  });

  return (
    <div className={wrapperClasses}>
      {labelLeft && (
        <label htmlFor={id} className={wrapperLabelClasses}>
          {labelLeft}
        </label>
      )}
      <span className={`gui-toggle-wrapper__inner ${toggleClasses}`}>
        <input
          data-testid={id}
          onChange={onClickHandler}
          checked={isChecked}
          type="checkbox"
          id={id}
          className="gui-toggle-switch toggle-switch--inline"
        />
        {/* prettier-ignore */}
        <label // eslint-disable-line jsx-a11y/label-has-associated-control
            data-label-id
            className={switchLabelClasses}
            htmlFor={id}
          />
      </span>
      {labelRight && (
        <label htmlFor={id} className={wrapperLabelClasses}>
          {labelRight}
        </label>
      )}
    </div>
  );
}

export default CheckToggle;
