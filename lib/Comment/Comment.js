import React from 'react';
import cx from 'classnames';
import { bool, node, string } from 'prop-types';
import { CommentBody } from './CommentBody';
import { CommentMeta } from './CommentMeta';
import { CommentReplyCount } from './CommentReplyCount';
import { CommentFailed } from './CommentFailed';
import { CommentForm } from './CommentForm';
import { CommentSubscribeToggle } from './CommentSubscribeToggle';
import { CommentResolveButton } from './CommentResolveButton';
import { CommentHeader } from './CommentHeader';
import { CommentActions } from './CommentActions';
import { CommentText } from './CommentText';
import { CommentContext, CommentProvider } from './CommentProvider';
import { CommentDeleteConfirmation } from './CommentDeleteConfirmation';

function Comment({ children, isOpen, className, ...rest }) {
  const classNames = cx('comment relative p-3', className, {
    'mb-2': !isOpen,
    'border-t-0 border-l-0 border-r-0 border-b border-solid border-neutral-95': isOpen
  });

  return (
    <div className={`comment relative p-3 ${classNames}`} {...rest}>
      {children}
    </div>
  );
}

Comment.propTypes = {
  children: node.isRequired,
  isOpen: bool.isRequired,
  className: string
};

Comment.defaultProps = {
  className: ''
};

Comment.Provider = CommentProvider;
Comment.Context = CommentContext;
Comment.Header = CommentHeader;
Comment.Body = CommentBody;
Comment.Text = CommentText;
Comment.Meta = CommentMeta;
Comment.Actions = CommentActions;
Comment.DeleteConfirmation = CommentDeleteConfirmation;
Comment.ReplyCount = CommentReplyCount;
Comment.Failed = CommentFailed;
Comment.Form = CommentForm;
Comment.SubscribeToggle = CommentSubscribeToggle;
Comment.ResolveButton = CommentResolveButton;

export { Comment };
