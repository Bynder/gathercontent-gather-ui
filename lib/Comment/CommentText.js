import React, { Fragment } from 'react';
import { node } from 'prop-types';

export function CommentText({ children }) {
  return <p className="conversation__text">{children}</p>;
}

CommentText.propTypes = {
  children: node
};

CommentText.defaultProps = {
  children: <Fragment />
};
