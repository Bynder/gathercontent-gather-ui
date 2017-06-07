import React, { PropTypes } from 'react';
import Comment from './Comment';

const CommentList = ({ comments, ...rest }) => {
  const list = comments.map(comment =>
    <Comment
      key={comment.id}
      comment={comment}
      {...rest}
    />,
  );

  return (
    <div className="comment-list">
      {list}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape()),
};

export default CommentList;
