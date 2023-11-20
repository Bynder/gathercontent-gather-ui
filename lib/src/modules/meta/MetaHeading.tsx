import React from "react";

function MetaHeading({ children, className }: any) {
  const classNames = `gui-meta-heading text-base text-neutral-20 font-semi-bold mb-1 truncate ${className}`;

  return <div className={classNames}>{children}</div>;
}

export { MetaHeading };
