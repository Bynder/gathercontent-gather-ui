import React from 'react';
import { string } from 'prop-types';

export function CommentFailed({
  errorText
}: any) {
  return <span className="text-red-primary text-sm">{errorText}</span>;
}

CommentFailed.propTypes = {
  errorText: string.isRequired
};
