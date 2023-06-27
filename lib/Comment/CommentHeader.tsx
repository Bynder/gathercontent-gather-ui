import React, { useContext } from 'react';
import { node, string } from 'prop-types';
import { Comment } from 'lib';
import cx from 'classnames';

function CommentHeader({ children, actions, className }) {
  const { isDeleting } = useContext(Comment.Context);

  const classNames = cx(
    className,
    'comment-header mb-2 relative leading-tight',
    {
      'blur-background': isDeleting
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
  className: string
};

CommentHeader.defaultProps = {
  actions: null,
  className: ''
};

export { CommentHeader };
