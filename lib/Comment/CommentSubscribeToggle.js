import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import { ButtonIcon, ButtonIconDanger, useLoader } from 'lib';

export function CommentSubscribeToggle({ onToggle, isSubscribed }) {
  const [hasFailed, setHasFailed] = useState(false);

  const handleSubscribeClick = async () => {
    try {
      await onToggle();
    } catch (error) {
      setHasFailed(true);
      setTimeout(() => setHasFailed(false), 3000);
      console.error(error);
    }
  };
  const [isSubscribing, onToggleWithLoader] = useLoader(handleSubscribeClick);

  const ButtonType = hasFailed ? ButtonIconDanger : ButtonIcon;

  return (
    <div className="flex items-center">
      <ButtonType
        name={isSubscribing ? 'loader16' : 'bell'}
        title="Subscribe to conversation"
        size={ButtonIcon.sizes.sm}
        labelRight="Subscribe"
        onClick={onToggleWithLoader}
        active={isSubscribed}
      />
      {hasFailed && (
        <p className="ml-2 text-red-primary my-0 text-sm">
          Couldn't {isSubscribed ? 'unsubscribe' : 'subscribe'}
        </p>
      )}
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
