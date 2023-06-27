import React from 'react';

export function DropdownContentList({
  children,
  heading,
  ...rest
}: any) {
  return (
    <div className="dropdown-content-list" {...rest}>
      {heading && (
        <div className="dropdown-content-list-heading">{heading}</div>
      )}
      {children}
    </div>
  );
}
