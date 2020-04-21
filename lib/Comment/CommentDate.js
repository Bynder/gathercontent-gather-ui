import React from 'react';
import { string } from 'prop-types';

export function CommentDate({ createdAt }) {
  return (
    <span className="conversation__meta conversation__date-text">
      {createdAt}
    </span>
  );
}

CommentDate.propTypes = {
  createdAt: string
};

CommentDate.defaultProps = {
  createdAt: ''
};
