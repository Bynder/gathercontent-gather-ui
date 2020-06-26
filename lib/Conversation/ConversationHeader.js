import React from 'react';
import { node, string } from 'prop-types';

export function ConversationHeader({ children, className, ...rest }) {
  return (
    <div
      className={`conversation-header flex p-3 border-t-0 border-l-0 border-r-0 border-b border-solid border-neutral-95 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

ConversationHeader.propTypes = {
  children: node.isRequired,
  className: string
};

ConversationHeader.defaultProps = {
  className: ''
};
