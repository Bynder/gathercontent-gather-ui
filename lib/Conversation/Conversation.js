import React from 'react';
import { bool, node, string } from 'prop-types';
import cx from 'classnames';
import { ConversationHeader } from './ConversationHeader';
import { ConversationFooter } from './ConversationFooter';
import { ConversationBody } from './ConversationBody';

function Conversation({ className, children, isOpen, isFocussed, ...rest }) {
  const innerClassName = cx(
    `${className} relative rounded w-full border border-solid border-neutral-90 shadow-small`,
    {
      'shadow-small bg-white': isOpen,
      'cursor-pointer hover:bg-neutral-95 conversation__inactive border-1 border-solid': !isOpen,
      'border-transparent': !isOpen && !isFocussed,
      'border-blue-80': !isOpen && isFocussed
    }
  );

  return (
    <div className={innerClassName} {...rest}>
      {children}
    </div>
  );
}

Conversation.propTypes = {
  className: string,
  children: node.isRequired,
  isOpen: bool.isRequired,
  isFocussed: bool
};

Conversation.defaultProps = {
  className: '',
  isFocussed: false
};

Conversation.Header = ConversationHeader;
Conversation.Footer = ConversationFooter;
Conversation.Body = ConversationBody;

export { Conversation };
