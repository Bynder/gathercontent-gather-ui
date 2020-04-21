import React, { Fragment } from 'react';
import { node } from 'prop-types';

export function ConversationBody({ children }) {
  return <div className="conversation__body">{children}</div>;
}

ConversationBody.propTypes = {
  children: node
};

ConversationBody.defaultProps = {
  children: <Fragment />
};
