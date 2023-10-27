import React from "react";

export function ConversationHeader({ children, className, ...rest }: any) {
  return (
    <div
      className={`gui-conversation-header flex p-3 border-t-0 border-l-0 border-r-0 border-b border-solid border-neutral-95 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}

ConversationHeader.defaultProps = {
  className: "",
};
