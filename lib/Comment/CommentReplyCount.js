import React from 'react';
import { number } from 'prop-types';
import pluralize from 'pluralize';

export function CommentReplyCount({ count }) {
  return (
    <div className="-mt-3 relative flex items-center mx-2">
      <p className="text-sm pr-2 py-2 text-neutral-primary m-0 font-medium no-wrap">
        {`${count} more ${pluralize('reply', count)}`}
      </p>
      <span className="w-full border border-solid border-b-0 border-neutral-90" />
    </div>
  );
}

CommentReplyCount.propTypes = {
  count: number.isRequired
};
