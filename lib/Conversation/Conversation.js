import React, { Fragment } from 'react';
import { node, string } from 'prop-types';
import { ConversationHeader } from './ConversationHeader';
import { ConversationFooter } from './ConversationFooter';
import { ConversationBody } from './ConversationBody';

function Conversation({ className, children, ...rest }) {
  return (
    <div className={`conversation ${className}`} {...rest}>
      {children}
    </div>
  );
}

Conversation.propTypes = {
  className: string,
  children: node
};

Conversation.defaultProps = {
  className: '',
  children: <Fragment />
};

Conversation.Header = ConversationHeader;
Conversation.Footer = ConversationFooter;
Conversation.Body = ConversationBody;

export { Conversation };
