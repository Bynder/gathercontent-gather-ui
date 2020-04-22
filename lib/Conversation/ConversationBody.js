import React, { Fragment } from 'react';
import { node } from 'prop-types';

export function ConversationBody({ children }) {
  return <div className="border-t-0 border-l-0 border-r-0 border-b border-solid border-neutral-95">{children}</div>;
}

ConversationBody.propTypes = {
  children: node
};

ConversationBody.defaultProps = {
  children: <Fragment />
};
