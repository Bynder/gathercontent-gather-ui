import React, { useState } from 'react';
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
  ...props
}) {
  const [labelText, setLabelText] = useState(label);
  const [isFocused, setIsFocused] = useState(false);
  const [showAside, setShowAside] = useState(false);

  const handleOnChange = e => {
    onChange(e);
    setLabelText(e.target.value);
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="border-none p-3 w-full text-input-base text-input-padding bg-transparent"
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
  aside: node
};

EditableChoiceInput.defaultProps = {
  className: '',
  label: '',
  placeholder: 'Add label text',
  readOnly: false,
  aside: null
};

export default EditableChoiceInput;
