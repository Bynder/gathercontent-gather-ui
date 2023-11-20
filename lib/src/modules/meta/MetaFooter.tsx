import React from "react";

function MetaFooter({ children, className }: any) {
  const classNames = `gui-meta-footer mt-2 text-neutral-primary flex items-center text-sm ${className}`;

  return <div className={classNames}>{children}</div>;
}

export { MetaFooter };
