import React, { useContext } from "react";
import { Comment } from "lib";
import cx from "classnames";

function CommentBody({ children, className }: any) {
  const { isDeleting }: any = useContext(Comment.Context);

  const classNames = cx(className, "comment-body", {
    "blur-background": isDeleting,
  });

  return <div className={classNames}>{children}</div>;
}

CommentBody.defaultProps = {
  className: "",
};

export { CommentBody };
