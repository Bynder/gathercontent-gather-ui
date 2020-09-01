import React from 'react';
import { string, func, bool } from 'prop-types';
import ExpandingTextArea from 'lib/ExpandingTextArea';
import Linkify from 'linkifyjs/react';
import { propTypes, defaultProps } from './common';

function ColFieldInstructions({
  children,
  className,
  editable,
  onChange,
  placeholder,
  ...props
}) {
  const classes = `col-field__instructions py-4 px-5 border-0 text-sm ${className}`;
  if (editable) {
    return (
      <ExpandingTextArea
        type="text"
        value={children}
        className={classes}
        handleOnChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    );
  }
  return (
    <div className={classes} {...props}>
      <Linkify>{children}</Linkify>
    </div>
  );
}

ColFieldInstructions.propTypes = {
  ...propTypes,
  editable: bool,
  onChange: func,
  placeholder: string
};

ColFieldInstructions.defaultProps = {
  ...defaultProps,
  editable: false,
  onChange: () => {},
  placeholder: 'Add some instructions...'
};

export default ColFieldInstructions;
