import React, { useContext } from 'react';
import { func, number, string } from 'prop-types';
import Linkify from 'linkifyjs/react';
import { FieldNew } from 'lib';
import ExpandingTextArea from '../ExpandingTextArea';

export const FieldInstructions = ({
  children,
  onChange,
  minRows,
  placeholder,
  className
}) => {
  const { inStructureEditMode } = useContext(
    FieldNew.InStructureEditModeContext
  );

  if (inStructureEditMode) {
    return (
      <ExpandingTextArea
        type="text"
        className={`field__instructions
          text-sm
          border-0 border-t rounded-none
          ${className}`}
        handleOnChange={onChange}
        value={children}
        placeholder={placeholder}
        minRows={minRows}
      />
    );
  }

  if (children) {
    return (
      <div className={`field__instructions text-sm ${className}`}>
        <Linkify>{children}</Linkify>
      </div>
    );
  }

  return null;
};

FieldInstructions.propTypes = {
  children: string,
  onChange: func,
  minRows: number,
  placeholder: string,
  className: string
};

FieldInstructions.defaultProps = {
  minRows: 1,
  onChange: () => {},
  children: '',
  placeholder: 'Add field instructions here...',
  className: ''
};
