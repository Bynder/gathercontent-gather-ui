import React, { useContext } from "react";
import { Comment } from "lib";
import cx from "classnames";

function CommentHeader({ children, actions, className }: any) {
  const { isDeleting }: any = useContext(Comment.Context);

  const classNames = cx(
    className,
    "gui-comment-header mb-2 relative leading-tight",
    {
      "gui-blur-background": isDeleting,
    }
  );

  return (
    <div className={classNames}>
      {children}
      {actions}
    </div>
  );
}

CommentHeader.defaultProps = {
  actions: null,
  className: "",
};

export { CommentHeader };
