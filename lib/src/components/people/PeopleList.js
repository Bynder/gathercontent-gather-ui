import React from 'react';

export function PeopleList({ children, heading, ...rest }) {
  return (
    <div className="people-list" {...rest}>
      {heading && <div className="people-list-heading">{heading}</div>}
      {children}
    </div>
  );
}
