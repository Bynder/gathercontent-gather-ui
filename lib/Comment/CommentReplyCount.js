import React from 'react';
import { number } from 'prop-types';
import pluralize from 'pluralize';

export function CommentReplyCount({ count }) {
  return (
    <div className="-mt-2 pl-10">
      <p className="text-sm px-2 py-2 text-neutral-primary leading-5 m-0 font-medium">{`${count} more ${pluralize(
        'reply',
        count
      )}`}</p>
    </div>
  );
}

CommentReplyCount.propTypes = {
  count: number.isRequired
};
