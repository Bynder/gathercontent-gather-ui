import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = ({ comments, ...rest }) => {
  const list = comments.map((comment, index) => (
    <Comment key={comment.id} {...rest} {...comment} index={index} />
  ));

  return <div className="conversation__comment-list">{list}</div>;
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default CommentList;
