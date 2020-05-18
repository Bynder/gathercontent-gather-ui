import React, { useContext } from 'react';
import { func, string } from 'prop-types';
import { FieldNew } from 'lib';
import cx from 'classnames';
import EditableTextWrapper from '../EditableTextWrapper';

export const FieldLabel = ({ children, onChange, className }) => {
  const { inStructureEditMode } = useContext(
    FieldNew.InStructureEditModeContext
  );

  if (inStructureEditMode) {
    return (
      <EditableTextWrapper
        value={children}
        className={cx(
          className,
          'field__label block font-semi-bold leading-normal -mr-2'
        )}
        onChange={onChange}
        multiline
        inputLabel={`edit field label: ${children}`}
      >
        {children}
      </EditableTextWrapper>
    );
  }

  return (
    <div className={`field__label font-semi-bold leading-normal ${className}`}>
      {children}
    </div>
  );
};

FieldLabel.propTypes = {
  children: string.isRequired,
  onChange: func,
  className: string
};

FieldLabel.defaultProps = {
  onChange: () => {},
  className: ''
};
