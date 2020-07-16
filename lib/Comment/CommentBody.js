import React, { useContext } from 'react';
import { node, string } from 'prop-types';
import { Comment } from 'lib';
import cx from 'classnames';

function CommentBody({ children, className }) {
  const { isDeleting } = useContext(Comment.Context);

  const classNames = cx(className, 'comment-body', {
    'blur-background': isDeleting
  });

  return <div className={classNames}>{children}</div>;
}

CommentBody.propTypes = {
  children: node.isRequired,
  className: string
};

CommentBody.defaultProps = {
  className: ''
};

export { CommentBody };
