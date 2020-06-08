import React, { useContext } from 'react';
import { FieldNew } from 'lib';
import cx from 'classnames';
import { node, string } from 'prop-types';

export function FieldMainColumn({ children, className }) {
  const { inStructureEditMode } = useContext(
    FieldNew.InStructureEditModeContext
  );

  return (
    <div
      className={cx(
        className,
        'col-span-12 md:col-span-8',
        'col-start-1',
        'flex flex-col items-center',
        {
          'md:col-start-5': !inStructureEditMode,
          'md:col-start-4': inStructureEditMode
        }
      )}
    >
      {children}
    </div>
  );
}

FieldMainColumn.propTypes = {
  children: node.isRequired,
  className: string
};

FieldMainColumn.defaultProps = {
  className: ''
};
