import React, { Fragment } from 'react';
import { node, string } from 'prop-types';

export function ConversationBody({ children, className, ...rest }) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

ConversationBody.propTypes = {
  children: node,
  className: string
};

ConversationBody.defaultProps = {
  children: <Fragment />,
  className: ''
};
