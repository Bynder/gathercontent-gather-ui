import React, { useContext } from 'react';
import { element, node, oneOf, string } from 'prop-types';
import cx from 'classnames';
import { FieldNew } from 'lib';

export const ACTIVE = 'ACTIVE';
export const ADDED = 'ADDED';
export const DELETED = 'DELETED';
export const MOVED_UP = 'MOVED_UP';
export const MOVED_DOWN = 'MOVED_DOWN';
export const UNCHANGED = 'UNCHAGED';

export function FieldContent({ children, className, instructions, status }) {
  const { inStructureEditMode } = useContext(
    FieldNew.InStructureEditModeContext
  );

  return (
    <div
      className={cx(
        className,
        'col-span-12 md:col-span-8',
        'col-start-1',
        'border-solid',
        'rounded',
        'shadow',
        'transition-all, transition-ease duration-200',
        {
          'p-6': !inStructureEditMode,
          'md:col-start-5': !inStructureEditMode,
          'md:col-start-4': inStructureEditMode,
          'border border-neutral-90': status === ACTIVE,
          'border border-neutral-90 bg-neutral-98 group-hover:bg-white':
            status === UNCHANGED,
          'border-2 border-green-primary bg-green-98': status === ADDED,
          'border-2 border-red-primary bg-red-98': status === DELETED,
          'border-2 border-purple-primary bg-purple-98':
            status === MOVED_DOWN || status === MOVED_UP
        }
      )}
    >
      {children}
      {instructions}
    </div>
  );
}

FieldContent.propTypes = {
  children: node.isRequired,
  className: string,
  instructions: element,
  status: oneOf([ACTIVE, ADDED, DELETED, MOVED_UP, MOVED_DOWN, UNCHANGED])
};

FieldContent.defaultProps = {
  className: '',
  instructions: null,
  status: UNCHANGED
};
