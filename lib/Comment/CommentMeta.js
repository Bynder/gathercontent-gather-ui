import React, { Fragment } from 'react';
import { bool, func, string } from 'prop-types';
import Button from '../Button';

export function MetaDot() {
  return <span className="text-xs text-neutral-primary mr-1 relative">•</span>;
}

export function CommentMeta({
  createdAt,
  onEditClick,
  onRemoveClick,
  showActions,
  showDate
}) {
  const metaClass = 'text-xs mr-1';

  return (
    <div className="mb-2 inline-flex item justify-center items-center">
      {showDate && (
        <span className={`${metaClass} text-neutral-primary`}>{createdAt}</span>
      )}
      {showActions && (
        <Fragment>
          <span className="inline-flex item justify-center items-center">
            {showDate && <MetaDot />}
            <Button
              className={`${metaClass} `}
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
  showDate: false,
  showActions: true
};
