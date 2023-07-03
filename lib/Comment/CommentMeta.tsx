import React from 'react';
import { array, node, oneOfType, string } from 'prop-types';

export function CommentMeta({
  children
}: any) {
  return (
    <div className="comment-meta flex w-full item items-center">
      <span className="text-sm text-neutral-primary">{children}</span>
    </div>
  );
}

CommentMeta.propTypes = {
  children: oneOfType([string, node, array]).isRequired
};
