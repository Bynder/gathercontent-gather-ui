import React from 'react';

export function PeopleBody({ children, ...rest }) {
  return (
    <div className="people-body" {...rest}>
      {children}
    </div>
  );
}
