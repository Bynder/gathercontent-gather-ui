import React from 'react';
import { bool, func, string } from 'prop-types';
import Icon from '../Icon';
import CheckToggle from '../CheckToggle';
import Button from '../Button';
import { MetaDot } from '../Comment/CommentMeta';

export function ConversationHeader({
  id,
  icon,
  onSubscribeChange,
  isSubscribed,
  resolved,
  handleUndoResolve,
  userCanResolve,
  resolveConversation
}) {
  return (
    <div className="flex border-t-0 border-l-0 border-r-0 border-b border-solid border-neutral-95">
      {icon && (
        <div className="flex justify-center items-center w-10 border-t-0 border-l-0 border-b-0 border-r border-solid border-neutral-95">
          <Icon name={icon} />
        </div>
      )}
      {onSubscribeChange && (
        <CheckToggle
          displaySmall
          displayChecked
          labelRight="Subscribe"
          clickHandler={onSubscribeChange}
          checked={isSubscribed}
          id={`${id}-subscribe`}
          autoToggle={false}
          className="p-2"
        />
      )}

      <div className="text-right ml-auto text-sm">
        {resolved && (
          <span className="text-neutral-primary py-2 px-2 inline-flex item justify-center items-center">
            <Icon
              name="resolved"
              className="text-primary-neutral fill-current mr-1"
            />
            Resolved
            {handleUndoResolve && userCanResolve && (
              <div className="ml-1">
                <MetaDot />
                <Button
                  types={['link-default', 'collapse']}
                  onClick={handleUndoResolve}
                >
                  Undo?
                </Button>
              </div>
            )}
          </span>
        )}
        {!resolved && userCanResolve && (
          <Button
            types={['link-default']}
            clickHandler={() => resolveConversation(id)}
          >
            Resolve
          </Button>
        )}
      </div>
    </div>
  );
}

ConversationHeader.propTypes = {
  id: string,
  icon: string,
  onSubscribeChange: func,
  isSubscribed: bool,
  resolved: bool,
  handleUndoResolve: func,
  userCanResolve: bool,
  resolveConversation: func
};

ConversationHeader.defaultProps = {
  id: '',
  icon: '',
  onSubscribeChange: () => {},
  isSubscribed: false,
  resolved: false,
  handleUndoResolve: () => {},
  userCanResolve: false,
  resolveConversation: () => {}
};
