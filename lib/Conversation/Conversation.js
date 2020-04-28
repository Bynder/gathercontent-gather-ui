import React from 'react';
import { bool, node, string } from 'prop-types';
import cx from 'classnames';
import { ConversationHeader } from './ConversationHeader';
import { ConversationFooter } from './ConversationFooter';
import { ConversationBody } from './ConversationBody';

function Conversation({ className, children, isActive, ...rest }) {
  const innerClassName = cx(`${className} relative rounded m-4 w-full`, {
    'border border-solid border-neutral-90 shadow-small': isActive,
    'conversation__inactive border-1 border-solid border-transparent hover:bg-neutral-95 border- cursor-pointer': !isActive
  });

  return (
    <div className={innerClassName} {...rest}>
      {children}
    </div>
  );
}

Conversation.propTypes = {
  className: string,
  children: node.isRequired,
  isActive: bool
};

Conversation.defaultProps = {
  className: '',
  isActive: false
};

Conversation.Header = ConversationHeader;
Conversation.Footer = ConversationFooter;
Conversation.Body = ConversationBody;

export { Conversation };
