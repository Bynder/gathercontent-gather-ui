import React, { useContext } from "react";
import { node, string } from "prop-types";
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Comment } from "lib";
import cx from "classnames";

function CommentBody({ children, className }: any) {
  const { isDeleting }: any = useContext(Comment.Context);

  const classNames = cx(className, "comment-body", {
    "blur-background": isDeleting,
  });

  return <div className={classNames}>{children}</div>;
}

CommentBody.propTypes = {
  children: node.isRequired,
  className: string,
};

CommentBody.defaultProps = {
  className: "",
};

export { CommentBody };
