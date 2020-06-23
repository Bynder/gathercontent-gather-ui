import React from 'react';
import { bool, func } from 'prop-types';
import { ButtonSecondary } from 'lib';
import Icon from '../Icon';

export function CommentResolveButton({
  resolved,
  onUndoResolve,
  userCanResolve,
  onResolve
}) {
  return (
    <div className="text-right ml-auto text-sm flex items-center h-8">
      {resolved && (
        <span className="text-neutral-primary inline-flex item justify-center items-center">
          <Icon
            name="resolved"
            className="text-primary-neutral fill-current mr-1"
          />
          Resolved
          {onUndoResolve && userCanResolve && (
            <div className="ml-2">
              <ButtonSecondary clickHandler={onUndoResolve} size="xs">
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
