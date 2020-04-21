import React, { Fragment } from 'react';
import { node } from 'prop-types';

export function CommentMeta({ children }) {
  return <div className="conversation__meta-wrapper">{children}</div>;
}

CommentMeta.propTypes = {
  children: node
};

CommentMeta.defaultProps = {
  children: <Fragment />
};
