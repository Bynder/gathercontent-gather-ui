import React, { Fragment } from 'react';
import { node } from 'prop-types';

export function ConversationBody({ children }) {
  return children;
}

ConversationBody.propTypes = {
  children: node
};

ConversationBody.defaultProps = {
  children: <Fragment />
};
