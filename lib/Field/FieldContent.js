import React, { useContext } from 'react';
import { element, node, string } from 'prop-types';
import cx from 'classnames';
import { FieldNew } from 'lib';

export function FieldContent({ children, className, instructions }) {
  const { inStructureEditMode } = useContext(
    FieldNew.InStructureEditModeContext
  );

  return (
    <div
      className={cx(
        className,
        'col-span-12 md:col-span-8',
        'col-start-1',
        'border border-solid border-neutral-90',
        'rounded',
        'shadow',
        {
          'p-6': !inStructureEditMode,
          'md:col-start-5': !inStructureEditMode,
          'md:col-start-4': inStructureEditMode
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
  instructions: element
};

FieldContent.defaultProps = {
  className: '',
  instructions: null
};
