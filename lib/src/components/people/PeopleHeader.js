import React from 'react';

export function PeopleHeader({ children, title, ...rest }) {
  return (
    <div className="people-header" {...rest}>
      <h4 className="people-header-title">{title}</h4>
      {children}
    </div>
  );
}
