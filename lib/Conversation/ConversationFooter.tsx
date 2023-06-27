import React from 'react';
import { node, string } from 'prop-types';

export function ConversationFooter({ children, className, ...rest }) {
  return (
    <div className={`conversation-footer p-3 ${className}`} {...rest}>
      {children}
    </div>
  );
}

ConversationFooter.propTypes = {
  children: node.isRequired,
  className: string
};

ConversationFooter.defaultProps = {
  className: ''
};
