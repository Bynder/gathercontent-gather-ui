import React from 'react';
import { bool, func, string } from 'prop-types';
import Icon from '../Icon';
import CheckToggle from '../CheckToggle';
import ResolveIcon from '../../assets/icons/resolve.svg';
import Button from '../Button';

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
        <div className="flex justify-center items-center w-double border-t-0 border-l-0 border-b-0 border-r border-solid border-neutral-95">
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
          className="p-half"
        />
      )}
      <div className="conversation__resolve">
        {resolved && (
          <span>
            <ResolveIcon /> Resolved
            {handleUndoResolve && userCanResolve && (
              <Button
                className="conversation__resolve-undo"
                types={['link-default', 'collapse']}
                onClick={handleUndoResolve}
              >
                Undo?
              </Button>
            )}
          </span>
        )}
        {!resolved && userCanResolve && (
          <Button
            types={['link-default']}
            clickHandler={() => resolveConversation(id)}
          >
            Resolve Conversation
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
