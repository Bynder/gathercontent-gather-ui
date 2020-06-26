import React, { useContext } from 'react';
import { node } from 'prop-types';
import { Comment } from 'lib';
import cx from 'classnames';

function CommentHeader({ children, actions }) {
  const { isDeleting } = useContext(Comment.Context);

  const classNames = cx('comment-header mb-2 relative', {
    'blur-background': isDeleting
  });

  return (
    <div className={classNames}>
      {children}
      {actions}
    </div>
  );
}

CommentHeader.propTypes = {
  children: node.isRequired,
  actions: node
};

CommentHeader.defaultProps = {
  actions: null
};

export { CommentHeader };
