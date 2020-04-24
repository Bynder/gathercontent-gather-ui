import React, { Fragment } from 'react';
import cx from 'classnames';
import { bool, node, string } from 'prop-types';
import { CommentBody } from './CommentBody';
import { CommentMeta } from './CommentMeta';
import { CommentDeleteOverlay } from './CommentDeleteOverlay';
import { CommentReplyCount } from './CommentReplyCount';
import { CommentFailed } from './CommentFailed';
import { NewCommentForm } from './NewCommentForm';
import { EditCommentForm } from './EditCommentForm';
import { CommentSubscribeToggle } from './CommentSubscribeToggle';
import { CommentResolveButton } from './CommentResolveButton';

function Comment({ children, className, isActive, ...rest }) {
  const innerClassName = cx(className, {
    'mb-2': !isActive,
    'border-t-0 border-l-0 border-r-0 border-b border-solid border-neutral-95': isActive,
    'pt-2': !className.includes('pt-')
  });

  return (
    <div className={`relative px-2 ${innerClassName}`} {...rest}>
      {children}
    </div>
  );
}

Comment.propTypes = {
  children: node,
  className: string,
  isActive: bool
};

Comment.defaultProps = {
  children: <Fragment />,
  className: '',
  isActive: false
};

Comment.Body = CommentBody;
Comment.Meta = CommentMeta;
Comment.Overlay = CommentDeleteOverlay;
Comment.ReplyCount = CommentReplyCount;
Comment.Failed = CommentFailed;
Comment.NewForm = NewCommentForm;
Comment.EditForm = EditCommentForm;
Comment.SubscribeToggle = CommentSubscribeToggle;
Comment.ResolveButton = CommentResolveButton;

export { Comment };
