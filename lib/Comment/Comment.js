import React, { Fragment } from 'react';
import { node, string } from 'prop-types';
import { CommentBody } from './CommentBody';
import { CommentMeta } from './CommentMeta';
import { CommentDeleteOverlay } from './CommentDeleteOverlay';
import { CommentReplyCount } from './CommentReplyCount';
import { CommentFailed } from './CommentFailed';

function Comment({ children, className, ...rest }) {
  return (
    <div className={`relative px-half pt-half ${className}`} {...rest}>
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

Comment.Body = CommentBody;
Comment.Meta = CommentMeta;
Comment.Overlay = CommentDeleteOverlay;
Comment.ReplyCount = CommentReplyCount;
Comment.Failed = CommentFailed;

export { Comment };
