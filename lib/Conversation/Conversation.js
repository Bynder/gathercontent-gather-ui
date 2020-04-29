import React from 'react';
import { bool, node, string } from 'prop-types';
import cx from 'classnames';
import { ConversationHeader } from './ConversationHeader';
import { ConversationFooter } from './ConversationFooter';
import { ConversationBody } from './ConversationBody';

function Conversation({ className, children, isActive, isFocussed, ...rest }) {
  const innerClassName = cx(`${className} relative rounded m-4 w-full`, {
    'border border-solid border-neutral-90 shadow-small': isActive,
    'cursor-pointer hover:bg-neutral-95 conversation__inactive border-1 border-solid': !isActive,
    'border-transparent': !isActive && !isFocussed,
    'border-blue-80': !isActive && isFocussed
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
  isActive: bool,
  isFocussed: bool
};

Conversation.defaultProps = {
  className: '',
  isActive: false,
  isFocussed: false
};

Conversation.Header = ConversationHeader;
Conversation.Footer = ConversationFooter;
Conversation.Body = ConversationBody;

export { Conversation };
