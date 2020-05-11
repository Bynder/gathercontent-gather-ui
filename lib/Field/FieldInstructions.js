import React, { useContext } from 'react';
import { func, number, string } from 'prop-types';
import Linkify from 'linkifyjs/react';
import ExpandingTextArea from '../ExpandingTextArea';
import { FieldInStructureEditModeContext } from './FieldInStructureEditModeProvider';

export const FieldInstructions = ({
  instructions,
  onChange,
  minRows,
  placeholder,
  className
}) => {
  const { inStructureEditMode } = useContext(FieldInStructureEditModeContext);

  if (inStructureEditMode) {
    return (
      <ExpandingTextArea
        type="text"
        className={`field__instructions ${className}`}
        handleOnChange={onChange}
        value={instructions}
        placeholder={placeholder}
        minRows={minRows}
      />
    );
  }

  if (instructions) {
    return (
      <div className={`field__instructions ${className}`}>
        <Linkify>{instructions}</Linkify>
      </div>
    );
  }

  return null;
};

FieldInstructions.propTypes = {
  instructions: string,
  onChange: func,
  minRows: number,
  placeholder: string,
  className: string
};

FieldInstructions.defaultProps = {
  minRows: 1,
  onChange: () => {},
  instructions: '',
  placeholder: 'Add field instructions here...',
  className: ''
};
