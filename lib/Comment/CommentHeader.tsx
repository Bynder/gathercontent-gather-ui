import React, { useContext } from "react";
import { node, string } from "prop-types";
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { Comment } from "lib";
import cx from "classnames";

function CommentHeader({ children, actions, className }: any) {
  const { isDeleting }: any = useContext(Comment.Context);

  const classNames = cx(
    className,
    "comment-header mb-2 relative leading-tight",
    {
      "blur-background": isDeleting,
    }
  );

  return (
    <div className={classNames}>
      {children}
      {actions}
    </div>
  );
}

CommentHeader.propTypes = {
  children: node.isRequired,
  actions: node,
  className: string,
};

CommentHeader.defaultProps = {
  actions: null,
  className: "",
};

export { CommentHeader };
