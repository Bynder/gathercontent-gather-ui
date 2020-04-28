import React from 'react';
import { bool, func } from 'prop-types';
import Icon from '../Icon';
import { MetaDot } from './CommentMeta';
import Button from '../Button';

export function CommentResolveButton({
  resolved,
  onUndoResolve,
  userCanResolve,
  onResolve
}) {
  return (
    <div className="text-right ml-auto text-sm">
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
              <Button
                types={['link-default', 'collapse']}
                onClick={onUndoResolve}
              >
                Undo?
              </Button>
            </div>
          )}
        </span>
      )}
      {!resolved && userCanResolve && (
        <Button types={['link-default']} clickHandler={onResolve}>
          Resolve
        </Button>
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
  onUndoResolve: () => {},
  userCanResolve: false,
  onResolve: () => {}
};
