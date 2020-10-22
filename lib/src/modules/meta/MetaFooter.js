import React from 'react';

function MetaFooter({ children, className }) {
  const classNames = `meta-footer flex items-center text-sm ${className}`;

  return <div className={classNames}>{children}</div>;
}

export { MetaFooter };
