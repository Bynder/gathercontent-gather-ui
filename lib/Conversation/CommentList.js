import React, { PropTypes } from 'react';
import Comment from './Comment';

const CommentList = ({ comments, ...rest }) => {
  const list = comments.map(comment =>
    <Comment
      key={comment.id}
      {...rest}
      {...comment}
    />,
  );

  return (
    <div className="conversation__comment-list">
      {list}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape()),
};

export default CommentList;
