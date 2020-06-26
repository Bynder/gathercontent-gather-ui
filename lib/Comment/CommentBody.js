import React, { useContext } from 'react';
import { node } from 'prop-types';
import { Comment } from 'lib';
import cx from 'classnames';

function CommentBody({ children }) {
  const { isDeleting } = useContext(Comment.Context);

  const classNames = cx('comment-body', {
    'blur-background': isDeleting
  });

  return <div className={classNames}>{children}</div>;
}

CommentBody.propTypes = {
  children: node.isRequired
};

export { CommentBody };
