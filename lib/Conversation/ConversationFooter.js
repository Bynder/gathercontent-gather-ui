import React, { Fragment } from 'react';
import { node, string } from 'prop-types';

export function ConversationFooter({ children, className, ...rest }) {
  return (
    <div className={`p-2 ${className}`} {...rest}>
      {children}
    </div>
  );
}

ConversationFooter.propTypes = {
  children: node,
  className: string
};

ConversationFooter.defaultProps = {
  children: <Fragment />,
  className: ''
};
