import React from 'react';
import { string } from 'prop-types';

export function CommentMeta({ children }) {
  return (
    <div className="comment-meta flex w-full item items-center">
      <span className="text-sm text-neutral-primary">{children}</span>
    </div>
  );
}

CommentMeta.propTypes = {
  children: string.isRequired
};
