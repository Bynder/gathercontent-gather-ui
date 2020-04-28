import React from 'react';
import { func } from 'prop-types';
import Icon from '../Icon';
import Button from '../Button';

export function CommentFailed({ onRetry }) {
  return (
    <span className="text-xs mb-2 inline-flex item justify-center items-center text-neutral-60">
      <Icon name="warning" className="text-primary-neutral fill-current mr-1" />
      Comment failed.
      <Button
        className="text-xs ml-1"
        types={['link', 'link-default', 'collapse']}
        clickHandler={onRetry}
      >
        Retry?
      </Button>
    </span>
  );
}

CommentFailed.propTypes = {
  onRetry: func.isRequired
};
