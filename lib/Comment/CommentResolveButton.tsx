import React from "react";
import { ButtonSecondary } from "lib";
import Icon from "../Icon";

export function CommentResolveButton({
  resolved,
  onUndoResolve,
  userCanResolve,
  onResolve,
}: any) {
  return (
    <div className="flex items-center ml-auto h-8">
      {resolved && (
        <span className="text-sm font-semi-bold text-green-primary inline-flex item justify-center items-center">
          <Icon name="resolved" className="mr-1" />
          Resolved
          {onUndoResolve && userCanResolve && (
            <div className="ml-2">
              <ButtonSecondary onClick={onUndoResolve} size="xs">
                Undo
              </ButtonSecondary>
            </div>
          )}
        </span>
      )}

      {!resolved && userCanResolve && (
        <ButtonSecondary onClick={onResolve} size="xs">
          Resolve
        </ButtonSecondary>
      )}
    </div>
  );
}

CommentResolveButton.defaultProps = {
  resolved: false,
  onUndoResolve: null,
  userCanResolve: false,
  onResolve: () => {},
};
