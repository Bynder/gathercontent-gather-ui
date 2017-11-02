import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments, ...rest }) => {
  const commentsLength = comments.length;
  const list = comments.map((comment, i) => {
    const hasReply = i + 1 < commentsLength;
    return (
      <Comment hasReply={hasReply} key={comment.id} {...rest} {...comment} />
    );
  });

  return <div className="conversation__comment-list">{list}</div>;
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default CommentList;
