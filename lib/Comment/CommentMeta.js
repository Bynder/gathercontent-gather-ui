import React, { Fragment } from 'react';
import { bool, func, string } from 'prop-types';
import Button from '../Button';

function MetaDot() {
  return (
    <span className="h-full inline-flex items-center content-center">
      <span className="inline-block w-quarter h-quarter rounded bg-neutral-80 mr-quarter relative" />
    </span>
  );
}

export function CommentMeta({
  createdAt,
  onEditClick,
  onRemoveClick,
  showActions,
  showDate
}) {
  const metaClass = 'text-xs mr-quarter';

  return (
    <div className="mb-half">
      {showDate && (
        <span className={`${metaClass} conversation__date-text`}>
          {createdAt}
        </span>
      )}
      {showActions && (
        <Fragment>
          <span className="conversation__actions">
            {showDate && <MetaDot />}
            <Button
              className={`${metaClass} conversation__edit-link`}
              types={['link', 'link-default', 'collapse']}
              clickHandler={onEditClick}
            >
              Edit
            </Button>
            <MetaDot />
            <Button
              className={`${metaClass}`}
              types={['link', 'link-danger', 'collapse']}
              clickHandler={onRemoveClick}
            >
              Delete
            </Button>
          </span>
        </Fragment>
      )}
    </div>
  );
}

CommentMeta.propTypes = {
  createdAt: string,
  onEditClick: func,
  onRemoveClick: func,
  showDate: bool,
  showActions: bool
};

CommentMeta.defaultProps = {
  createdAt: '',
  onEditClick: () => {},
  onRemoveClick: () => {},
  showDate: true,
  showActions: true
};
