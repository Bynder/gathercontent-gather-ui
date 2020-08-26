import React from 'react';
import { node, string, func, bool } from 'prop-types';
import ExpandingTextArea from 'lib/ExpandingTextArea';
import Linkify from 'linkifyjs/react';

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
  children: node.isRequired,
  className: string,
  editable: bool,
  onChange: func,
  placeholder: string
};

ColFieldInstructions.defaultProps = {
  className: '',
  editable: false,
  onChange: () => {},
  placeholder: 'Add some instructions...'
};

export default ColFieldInstructions;
