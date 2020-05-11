import React, { useContext } from 'react';
import { func, string } from 'prop-types';
import EditableTextWrapper from '../EditableTextWrapper';
import { FieldInStructureEditModeContext } from './FieldInStructureEditModeProvider';

export const FieldLabel = ({ label, onChange, className }) => {
  const { inStructureEditMode } = useContext(FieldInStructureEditModeContext);

  if (inStructureEditMode) {
    return (
      <EditableTextWrapper
        value={label}
        className={`field__label ${className}`}
        onChange={onChange}
        multiline
        inputLabel={`edit field label: ${label}`}
      >
        {label}
      </EditableTextWrapper>
    );
  }

  return <div className={`field__label ${className}`}>{label}</div>;
};

FieldLabel.propTypes = {
  label: string,
  onChange: func,
  className: string
};

FieldLabel.defaultProps = {
  label: '',
  onChange: () => {},
  className: ''
};
