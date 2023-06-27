import React, { useContext } from 'react';
import cx from 'classnames';
import { node, string } from 'prop-types';
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

function Comment({ children, className, ...rest }) {
  const { isOpen, showBorders } = useContext(CommentContext);
  const classNames = cx('comment relative p-3', className, {
    'border-t-0 border-l-0 border-r-0 border-b border-solid border-neutral-90':
      isOpen || showBorders
  });

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
}

Comment.propTypes = {
  children: node.isRequired,
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
