import React from 'react';
import { bool, func } from 'prop-types';
import EditableTextWrapper from 'lib/EditableTextWrapper';
import { propTypes, defaultProps } from './common';

function ColFieldLabel({ children, className, editable, onChange, ...props }) {
  const classes = `col-field__label text-lg font-semi-bold text-neutral-20 ${className}`;
  if (editable) {
    return (
      <EditableTextWrapper
        value={children}
        className={classes}
        onChange={onChange}
        multiline
        inputLabel={`edit field label: ${children}`}
        inputClassNames="text-lg"
        {...props}
      >
        {children}
      </EditableTextWrapper>
    );
  }
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

ColFieldLabel.propTypes = {
  ...propTypes,
  editable: bool,
  onChange: func
};

ColFieldLabel.defaultProps = {
  ...defaultProps,
  editable: false,
  onChange: () => {}
};

export default ColFieldLabel;
