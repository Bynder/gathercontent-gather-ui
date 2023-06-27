import React from 'react';
import { number } from 'prop-types';
import pluralize from 'pluralize';

export function CommentReplyCount({ count }) {
  return (
    <div className="relative flex items-center px-3 mb-2">
      <p className="text-sm text-neutral-primary font-medium no-wrap pr-2 m-0">
        +{`${count} more ${pluralize('reply', count)}`}
      </p>
      <span className="w-full border border-solid border-b-0 border-neutral-90" />
    </div>
  );
}

CommentReplyCount.propTypes = {
  count: number.isRequired
};
