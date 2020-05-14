import React, { useContext } from 'react';
import { node, string } from 'prop-types';
import cx from 'classnames';
import { FieldNew } from 'lib';

export const FieldMeta = ({ children, className }) => {
  const { inStructureEditMode } = useContext(
    FieldNew.InStructureEditModeContext
  );

  return (
    <div
      className={cx(className, 'col-span-12 col-start-1 md:col-start-1', {
        'md:col-span-4': !inStructureEditMode,
        'md:col-span-3': inStructureEditMode
      })}
    >
      {children}
    </div>
  );
};

FieldMeta.propTypes = {
  children: node.isRequired,
  className: string
};

FieldMeta.defaultProps = {
  className: ''
};
