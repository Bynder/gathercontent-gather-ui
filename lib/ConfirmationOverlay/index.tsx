import React, { useEffect, useRef, useState } from "react";
import cx from "classnames";
import {
  ButtonPrimary,
  ButtonPrimaryDanger,
  ButtonTertiary,
  useLoader,
} from "lib";
import Icon from "../Icon";

export function ConfirmationOverlay({
  confirm,
  cancel,
  confirmationText,
  failureText,
  className,
  show = false,
  ...rest
}: any) {
  const [hasFailed, setHasFailed] = useState(false);
  const setHasFailedTimeout = useRef(null);

  const handleConfirm = async () => {
    try {
      await confirm();
    } catch (error) {
      setHasFailed(true);
      // @ts-expect-error TS(2322): Type 'Timeout' is not assignable to type 'null'.
      setHasFailedTimeout.current = setTimeout(() => setHasFailed(false), 2000);
      console.error(error);
    }
  };

  useEffect(() => () => {
    if (setHasFailedTimeout.current !== null) {
      clearTimeout(setHasFailedTimeout.current);
    }
  });

  const [isSubmitting, handleSubmitWithLoader] = useLoader(handleConfirm);

  const classNames = cx(`gui-confirmation-overlay ${className}`, {
    "gui-confirmation-overlay--show": show,
  });

  return (
    <div className={classNames} {...rest}>
      <div className="gui-confirmation-overlay__inner">
        <ButtonTertiary
          size={ButtonTertiary.sizes.xs}
          onClick={cancel}
          className="mr-2 text-sm"
        >
          Cancel
        </ButtonTertiary>
        <ButtonPrimaryDanger
          // @ts-expect-error
          onClick={handleSubmitWithLoader}
          size={ButtonPrimary.sizes.xs}
          aria-label="Submit"
        >
          {isSubmitting && (
            <Icon name="loader16" className="mr-2 gui-fill-white" />
          )}
          {hasFailed && (
            <Icon name="danger16" className="mr-2 gui-fill-white" />
          )}
          {!hasFailed ? confirmationText : failureText}
        </ButtonPrimaryDanger>
      </div>
    </div>
  );
}

ConfirmationOverlay.defaultProps = {
  className: "",
  confirmationText: "Confirm",
  show: false,
  failureText: "",
};

export default ConfirmationOverlay;
