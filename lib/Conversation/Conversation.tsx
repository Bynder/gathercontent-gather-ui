import React from "react";
import cx from "classnames";
import { ConversationHeader } from "./ConversationHeader";
import { ConversationFooter } from "./ConversationFooter";
import { ConversationBody } from "./ConversationBody";

function Conversation({
  className,
  children,
  isOpen,
  isFocussed,
  ...rest
}: any) {
  const innerClassName = cx(`${className} relative rounded w-full group`, {
    "shadow-small bg-white": isOpen,
    "bg-neutral-98 hover:bg-neutral-95 cursor-pointer conversation__inactive":
      !isOpen,
    "shadow-button-secondary-focus border border-solid border-blue-primary":
      !isOpen && isFocussed,
    "border border-solid border-neutral-90": !isFocussed || isOpen,
  });

  return (
    <div className={innerClassName} {...rest}>
      {children}
    </div>
  );
}

Conversation.defaultProps = {
  className: "",
  isFocussed: false,
};

Conversation.Header = ConversationHeader;
Conversation.Footer = ConversationFooter;
Conversation.Body = ConversationBody;

export { Conversation };
