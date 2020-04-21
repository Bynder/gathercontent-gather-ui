import React, { Fragment } from 'react';
import { node, string } from 'prop-types';
import { CommentBody } from './CommentBody';
import { CommentMeta } from './CommentMeta';
import { CommentActions } from './CommentActions';
import { CommentDeleteOverlay } from './CommentDeleteOverlay';
import { CommentAuthor } from './CommentAuthor';
import CommentForm from '../Conversation/CommentForm';
import { CommentDate } from './CommentDate';
import { CommentReplyCount } from './CommentReplyCount';
import { CommentFailed } from './CommentFailed';
import { CommentText } from './CommentText';

function Comment({ children, className, ...rest }) {
  return (
    <div className={`conversation__comment ${className}`} {...rest}>
      {children}
    </div>
  );
}

Comment.propTypes = {
  children: node,
  className: string
};

Comment.defaultProps = {
  children: <Fragment />,
  className: ''
};

Comment.Author = CommentAuthor;
Comment.Body = CommentBody;
Comment.Meta = CommentMeta;
Comment.Actions = CommentActions;
Comment.Overlay = CommentDeleteOverlay;
Comment.Form = CommentForm;
Comment.Date = CommentDate;
Comment.ReplyCount = CommentReplyCount;
Comment.Failed = CommentFailed;
Comment.Text = CommentText;

export { Comment };
