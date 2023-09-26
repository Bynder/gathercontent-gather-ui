import React, { useEffect, useRef, useState } from "react";
import { ButtonIcon, ButtonIconDanger, useLoader } from "lib";

export function CommentSubscribeToggle({ onToggle, isSubscribed }: any) {
  const [hasFailed, setHasFailed] = useState(false);
  const setHasFailedTimeout = useRef(null);

  const handleSubscribeClick = async () => {
    try {
      await onToggle();
    } catch (error) {
      setHasFailed(true);
      // @ts-expect-error TS(2322): Type 'Timeout' is not assignable to type 'null'.
      setHasFailedTimeout.current = setTimeout(() => setHasFailed(false), 2000);
      console.error(error);
    }
  };
  const [isSubscribing, onToggleWithLoader] = useLoader(handleSubscribeClick);

  useEffect(() => () => {
    if (setHasFailedTimeout.current !== null) {
      clearTimeout(setHasFailedTimeout.current);
    }
  });

  const ButtonType = hasFailed ? ButtonIconDanger : ButtonIcon;

  return (
    <div className="flex items-center">
      <ButtonType
        name={isSubscribing ? "loader16" : "bell"}
        title="Subscribe to conversation"
        size={ButtonIcon.sizes.sm}
        onClick={onToggleWithLoader}
        active={isSubscribed}
      />
      {hasFailed && (
        <p className="ml-2 text-red-primary my-0 text-sm">
          Couldn't {isSubscribed ? "unsubscribe" : "subscribe"}
        </p>
      )}
    </div>
  );
}

CommentSubscribeToggle.defaultProps = {
  onToggle: () => {},
  isSubscribed: false,
};
