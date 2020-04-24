import React, { Fragment } from 'react';
import { node } from 'prop-types';

export function ConversationFooter({ children }) {
  return <div className="p-2">{children}</div>;
}

ConversationFooter.propTypes = {
  children: node
};

ConversationFooter.defaultProps = {
  children: <Fragment />
};
