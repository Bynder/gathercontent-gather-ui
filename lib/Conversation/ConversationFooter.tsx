import React from "react";

export function ConversationFooter({ children, className, ...rest }: any) {
  return (
    <div className={`conversation-footer p-3 ${className}`} {...rest}>
      {children}
    </div>
  );
}
ConversationFooter.defaultProps = {
  className: "",
};
