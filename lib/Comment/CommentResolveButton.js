import React from 'react';
import { bool, func } from 'prop-types';
import { ButtonSecondary } from 'lib';
import Icon from '../Icon';
import { MetaDot } from './CommentMeta';

export function CommentResolveButton({
  resolved,
  onUndoResolve,
  userCanResolve,
  onResolve
}) {
  return (
    <div className="text-right ml-auto text-sm flex items-center">
      {resolved && (
        <span className="text-neutral-primary py-2 px-2 inline-flex item justify-center items-center">
          <Icon
            name="resolved"
            className="text-primary-neutral fill-current mr-1"
          />
          Resolved
          {onUndoResolve && userCanResolve && (
            <div className="ml-1">
              <MetaDot />
              <ButtonSecondary
                types={['link-default', 'collapse']}
                onClick={onUndoResolve}
              >
                Undo?
              </ButtonSecondary>
            </div>
          )}
        </span>
      )}
      {!resolved && userCanResolve && (
        <ButtonSecondary clickHandler={onResolve} size="xs">
          Resolve
        </ButtonSecondary>
      )}
    </div>
  );
}

CommentResolveButton.propTypes = {
  resolved: bool,
  onUndoResolve: func,
  userCanResolve: bool,
  onResolve: func
};

CommentResolveButton.defaultProps = {
  resolved: false,
  onUndoResolve: null,
  userCanResolve: false,
  onResolve: () => {}
};
