import React from 'react';
import { number } from 'prop-types';
import pluralize from 'pluralize';
import Button from '../Button';

export function CommentReplyCount({ count }) {
  return (
    <div className="conversation__reply-count">
      <Button types={['size-sm', 'link-default']} clickHandler={() => {}}>
        {`${count} more ${pluralize('reply', count)}`}
      </Button>
    </div>
  );
}

CommentReplyCount.propTypes = {
  count: number.isRequired
};
