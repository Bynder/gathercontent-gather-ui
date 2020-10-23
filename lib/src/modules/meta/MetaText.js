import React from 'react';

function MetaText({ children, className }) {
  const classNames = `meta-text text-neutral-base text-sm mb-2 truncate ${className}`;

  return <div className={classNames}>{children}</div>;
}

export { MetaText };
