import React from 'react';

export function PeopleFooter({ children, ...rest }) {
  return (
    <div className="people-footer" {...rest}>
      {children}
    </div>
  );
}
