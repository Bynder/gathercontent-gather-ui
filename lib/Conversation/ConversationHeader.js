import React, { Fragment } from 'react';
import { node } from 'prop-types';

export function ConversationHeader({ children }) {
  return (
    <div className="flex border-t-0 border-l-0 border-r-0 border-b border-solid border-neutral-95">
      {children}
    </div>
  );
}

ConversationHeader.propTypes = {
  children: node
};

ConversationHeader.defaultProps = {
  children: <Fragment />
};
