import React from 'react';
import { func } from 'prop-types';
import Icon from '../Icon';
import Button from '../Button';

export function CommentFailed({ onRetry }) {
  return (
    <span className="conversation__failed-text">
      <Icon name="warning" className="conversation__failed--icon" />
      Comment failed.
      <Button
        className="conversation__meta conversation__failed--button"
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
