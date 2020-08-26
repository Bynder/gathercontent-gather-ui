import React from 'react';
import { node, string, bool, func } from 'prop-types';
import EditableTextWrapper from 'lib/EditableTextWrapper';

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
  children: node.isRequired,
  className: string,
  editable: bool,
  onChange: func
};

ColFieldLabel.defaultProps = {
  className: '',
  editable: false,
  onChange: () => {}
};

export default ColFieldLabel;
