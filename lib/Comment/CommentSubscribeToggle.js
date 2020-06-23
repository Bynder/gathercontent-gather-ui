import React from 'react';
import { bool, func } from 'prop-types';
import { ButtonIcon } from 'lib';

export function CommentSubscribeToggle({ onToggle, isSubscribed }) {
  return (
    <div className="flex items-center">
      <ButtonIcon
        name="bell"
        title="Subscribe to conversation"
        size={ButtonIcon.sizes.sm}
        labelRight="Subscribe"
        onClick={onToggle}
        active={isSubscribed}
      />
    </div>
  );
}

CommentSubscribeToggle.propTypes = {
  onToggle: func,
  isSubscribed: bool
};

CommentSubscribeToggle.defaultProps = {
  onToggle: () => {},
  isSubscribed: false
};
