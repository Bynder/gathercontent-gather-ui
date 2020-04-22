import React, { Fragment } from 'react';
import { bool, node, string } from 'prop-types';
import cx from 'classnames';
import { ConversationHeader } from './ConversationHeader';
import { ConversationFooter } from './ConversationFooter';
import { ConversationBody } from './ConversationBody';

function Conversation({ className, children, isActive, ...rest }) {
  const innerClassName = cx(`${className} relative rounded`, {
    'border border-solid border-neutral-95 shadow-small': isActive,
    'border-1 border-solid border-transparent hover:bg-neutral-95 border- m-4 w-full cursor-pointer': !isActive
  });

  return (
    <div className={innerClassName} {...rest}>
      {children}
    </div>
  );
}

Conversation.propTypes = {
  className: string,
  children: node,
  isActive: bool
};

Conversation.defaultProps = {
  className: '',
  children: <Fragment />,
  isActive: false
};

Conversation.Header = ConversationHeader;
Conversation.Footer = ConversationFooter;
Conversation.Body = ConversationBody;

export { Conversation };
