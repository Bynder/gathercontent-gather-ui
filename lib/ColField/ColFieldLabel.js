import React from 'react';
import { bool, func, string, oneOfType, node } from 'prop-types';
import EditableTextWrapper from 'lib/EditableTextWrapper';

function ColFieldLabel({
  label,
  className,
  editable,
  onChange,
  multiline,
  inputClassNames,
  ...props
}) {
  const classes = `col-field__label text-lg font-semi-bold text-neutral-20 mb-0 leading-5 ${className}`;
  if (editable) {
    return (
      <EditableTextWrapper
        value={label}
        className={classes}
        onChange={onChange}
        multiline={multiline}
        inputLabel={`edit field label: ${label}`}
        inputClassNames={`text-lg h-auto leading-5 ${inputClassNames}`}
        {...props}
      >
        {label}
      </EditableTextWrapper>
    );
  }
  return (
    <div className={classes} {...props}>
      {label}
    </div>
  );
}

ColFieldLabel.propTypes = {
  label: oneOfType([string, node]).isRequired,
  className: string,
  editable: bool,
  onChange: func,
  multiline: bool,
  inputClassNames: string
};

ColFieldLabel.defaultProps = {
  className: '',
  editable: false,
  onChange: () => {},
  multiline: false,
  inputClassNames: ''
};

export default ColFieldLabel;
