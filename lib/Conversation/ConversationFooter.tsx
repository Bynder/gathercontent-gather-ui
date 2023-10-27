import React from "react";

export function ConversationFooter({ children, className, ...rest }: any) {
  return (
    <div className={`gui-conversation-footer p-3 ${className}`} {...rest}>
      {children}
    </div>
  );
}
ConversationFooter.defaultProps = {
  className: "",
};
