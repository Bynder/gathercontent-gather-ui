import * as React from "react";
import { FormContext, statuses } from "./Form";

export function FormHelper({ children, className = "", ...rest }: any) {
  const { status }: any = React.useContext(FormContext);
  const hasFailed = status === statuses.failure;
  const hasSucceeded = status === statuses.success;
  const hasFailedRef = React.useRef(false);

  if (hasFailed) {
    hasFailedRef.current = true;
  }

  if (hasSucceeded) {
    hasFailedRef.current = false;
  }

  return React.useMemo(
    () =>
      hasFailedRef.current ? (
        <div className={`gui-form-helper ${className}`} {...rest}>
          {children}
        </div>
      ) : null,
    [hasFailed, hasFailedRef.current]
  );
}
