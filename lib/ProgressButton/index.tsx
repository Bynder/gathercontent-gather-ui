import React, { Component, useState } from "react";
import cx from "classnames";
import Button from "../Button";
import Icon from "../Icon";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: string;
  isSubmit?: boolean;
  clickHandler: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  callbackCanExecute?: boolean;
  showSpinner?: boolean;
  useShowSpinnerProp?: boolean;
  autoSpinner?: boolean;
  spinnerText?: string;
  onCallbackResolved?: (arg: any) => void;
}

export function ProgressButton({
  buttonType = "primary",
  isSubmit = false,
  callbackCanExecute = true,
  showSpinner = false,
  useShowSpinnerProp = false,
  disabled,
  autoSpinner = false,
  spinnerText,
  className,
  onCallbackResolved,
  value,
  clickHandler,
}: Props) {
  const [showSpinnerState, setShowSpinnerState] = useState(false);
  const getSpinningState = () => {
    const classes = cx({
      "gui-is-hidden": !spinnerText,
      "gui-progress-button__spinner-text": spinnerText,
    });
    return (
      <span className="gui-progress-button__wrapper">
        <span className={classes}>{spinnerText || value}</span>
        <Icon
          className="gui-progress-button__icon"
          name="loader"
          defaultActiveColor={false}
          title="Loading"
        />
      </span>
    );
  };

  const getNormalState = () => <span>{value}</span>;

  const handleClick = async (e: any) => {
    if (showSpinner || !callbackCanExecute) {
      return;
    }

    setShowSpinnerState(true);
    const result = await clickHandler(e);
    if (autoSpinner) {
      setShowSpinnerState(false);
    }

    if (onCallbackResolved) {
      onCallbackResolved(result);
    }
  };

  let content = null;
  if (useShowSpinnerProp) {
    if (showSpinner) {
      content = getSpinningState();
    } else {
      content = getNormalState();
    }
  } else if (showSpinnerState) {
    content = getSpinningState();
  } else {
    content = getNormalState();
  }

  return (
    <Button
      types={[buttonType]}
      clickHandler={handleClick}
      isSubmit={isSubmit}
      disabled={disabled}
      className={className}
    >
      {content}
    </Button>
  );
}

export default ProgressButton;
