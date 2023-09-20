import React from "react";

export function ConversationBody({ children, className, ...rest }: any) {
  return (
    <div className={className} {...rest}>
      {children}
    </div>
  );
}

ConversationBody.defaultProps = {
  className: "",
};
