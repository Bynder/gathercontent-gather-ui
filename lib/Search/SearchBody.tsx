import React from "react";
import cx from "classnames";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  showBody?: boolean;
}

function SearchBody({
  showBody = false,
  className = "",
  children,
  ...rest
}: Props) {
  const classNames = cx(`search__body ${className}`, {
    "display-results": showBody,
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}

export default SearchBody;
