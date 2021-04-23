import React from 'react';
import { bool, func, string, oneOfType, node } from 'prop-types';
import cx from 'classnames';
import { RenameInput } from 'lib';

function ColFieldLabel({
  label,
  className,
  editable,
  onChange,
  multiline,
  insetInput,
  formClass,
  placeholder,
  maxLength,
  ...props
}) {
  if (editable) {
    const classes = cx({
      '-m-05': insetInput
    });

    return (
      <div className={classes}>
        <RenameInput
          text={label}
          size={RenameInput.sizes.lrg}
          onRename={onChange}
          multiline={multiline}
          label={`edit field label: ${label}`}
          className={`col-field-label col-field-label-editable ${className}`}
          formClass={formClass}
          placeholder={placeholder}
          maxLength={maxLength}
          {...props}
        />
      </div>
    );
  }
  return (
    <div className={`col-field-label break-all ${className}`} {...props}>
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
  insetInput: bool,
  formClass: string,
  placeholder: string
};

ColFieldLabel.defaultProps = {
  className: '',
  editable: false,
  onChange: () => {},
  multiline: false,
  insetInput: true,
  formClass: '',
  placeholder: 'Enter a field label'
};

export default ColFieldLabel;
