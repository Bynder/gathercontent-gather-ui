import React from 'react';
import { PeopleHeader } from './PeopleHeader';
import { PeopleBody } from './PeopleBody';
import { PeopleList } from './PeopleList';
import { PeopleFooter } from './PeopleFooter';

export function People({ children, ...rest }) {
  return (
    <div className="people" {...rest}>
      {children}
    </div>
  );
}

People.Header = PeopleHeader;
People.Body = PeopleBody;
People.List = PeopleList;
People.Footer = PeopleFooter;
