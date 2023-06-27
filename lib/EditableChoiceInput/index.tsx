import React, { useState, useRef, useEffect } from 'react';
import { string, func, bool, node } from 'prop-types';
import cx from 'classnames';

function EditableChoiceInput({
  type,
  className,
  label,
  placeholder,
  readOnly,
  onChange,
  aside,
  autoFocus,
  onBlur,
  onFocus,
  ...props
}: any) {
  const textInput = useRef(null);
  useEffect(() => {
    if (textInput.current && autoFocus) {
      // @ts-expect-error TS(2339): Property 'focus' does not exist on type 'never'.
      textInput.current.focus();
    }
  }, [autoFocus]);

  const [labelText, setLabelText] = useState(label);
  const [isFocused, setIsFocused] = useState(false);
  const [showAside, setShowAside] = useState(false);

  const handleOnChange = (e: any) => {
    onChange(e);
    setLabelText(e.target.value);
  };

  const handleOnBlur = (e: any) => {
    onBlur(e);
    setIsFocused(false);
  };

  const handleOnFocus = (e: any) => {
    onFocus(e);
    setIsFocused(true);
  };

  const classNames = cx(`text-input-border pl-5 pr-2 ${className}`, {
    'text-input-border-focus': isFocused
  });

  return (
    <div
      className={classNames}
      onMouseEnter={() => setShowAside(true)}
      onMouseLeave={() => setShowAside(false)}
      {...props}
    >
      <div className="option-inner flex items-center">
        <input type={type} disabled />
        <input
          data-testid="editable-choice-text-input"
          value={labelText}
          placeholder={placeholder}
          type="text"
          disabled={readOnly}
          onChange={handleOnChange}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
          className="border-none p-3 w-full text-input-base text-input-padding bg-transparent"
          ref={textInput}
        />
        {aside && showAside && aside}
      </div>
    </div>
  );
}

EditableChoiceInput.propTypes = {
  type: string.isRequired,
  onChange: func.isRequired,
  className: string,
  label: string,
  placeholder: string,
  readOnly: bool,
  aside: node,
  autoFocus: bool,
  onBlur: func,
  onFocus: func
};

EditableChoiceInput.defaultProps = {
  className: '',
  label: '',
  placeholder: 'Add label text',
  readOnly: false,
  aside: null,
  autoFocus: false,
  onBlur: () => {},
  onFocus: () => {}
};

export default EditableChoiceInput;
