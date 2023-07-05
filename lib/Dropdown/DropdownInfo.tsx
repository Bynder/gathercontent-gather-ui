import React, { HTMLAttributes } from "react";
import cx from "classnames";

interface Props extends HTMLAttributes<HTMLDivElement> {
  borderTop?: boolean;
  borderBottom?: boolean;
}

function DropdownInfo({
  children,
  borderTop = false,
  borderBottom = true,
  ...rest
}: Props) {
  const classNames = cx(
    `dropdown__section p-4 text-sm border-solid border-neutral-90 bg-neutral-98 border-l-0 border-r-0 rounded-tl rounded-tr`,
    {
      "border-t": borderTop,
      "border-b": borderBottom,
      "border-t-0": !borderTop,
      "border-b-0": !borderBottom,
    }
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}

export default DropdownInfo;
