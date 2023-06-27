import React from 'react';
import { string, func, bool, oneOfType, node } from 'prop-types';
import ExpandingTextArea from 'lib/ExpandingTextArea';
import Linkify from 'linkifyjs/react';

function ColFieldInstructions({
  instructions,
  className,
  editable,
  onChange,
  placeholder,
  ...props
}) {
  const classes = `col-field__instructions py-4 px-5 border-0 text-sm whitespace-pre-line ${className}`;
  if (editable) {
    return (
      <ExpandingTextArea
        type="text"
        value={instructions}
        className={classes}
        handleOnChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    );
  }
  return (
    <div className={classes} {...props}>
      <Linkify>{instructions}</Linkify>
    </div>
  );
}

ColFieldInstructions.propTypes = {
  instructions: oneOfType([string, node]).isRequired,
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
