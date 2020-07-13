import React from 'react';
import { bool, func } from 'prop-types';
import { ButtonIcon, useLoader } from 'lib';

export function CommentSubscribeToggle({ onToggle, isSubscribed }) {
  const [isSubscribing, onToggleWithLoader] = useLoader(onToggle);

  return (
    <div className="flex items-center">
      <ButtonIcon
        name={isSubscribing ? 'loader16' : 'bell'}
        title="Subscribe to conversation"
        size={ButtonIcon.sizes.sm}
        onClick={onToggleWithLoader}
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
