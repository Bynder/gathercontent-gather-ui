import React, { Fragment } from 'react';
import { node } from 'prop-types';

export function CommentBody({ children }) {
  return (
    <Fragment>
      <div className="conversation__comment-body">{children}</div>
      <input
        type="text"
        className="conversation__focus-fallback"
        aria-hidden="true"
      />
    </Fragment>
  );
}

CommentBody.propTypes = {
  children: node
};

CommentBody.defaultProps = {
  children: <Fragment />
};
