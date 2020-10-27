import React from 'react';

function MetaText({ children, className }) {
  const classNames = `meta-text text-neutral-primary text-sm ${className}`;

  return <div className={classNames}>{children}</div>;
}

export { MetaText };
