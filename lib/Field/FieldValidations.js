import React from 'react';
import { arrayOf, bool, shape, string } from 'prop-types';

export const FieldValidations = ({ validations, className }) => {
  const validationsList = validations.map(({ text, hasFailed }) => (
    <span
      key={`validation-${text}`}
      className={`field__validation ${hasFailed ? 'color-overdue' : ''}`}
    >
      {text}
    </span>
  ));

  return (
    <div className={`field__validations ${className}`}>{validationsList}</div>
  );
};

FieldValidations.propTypes = {
  validations: arrayOf(
    shape({
      text: string,
      hasFailed: bool
    })
  ).isRequired,
  className: string
};

FieldValidations.defaultProps = {
  className: ''
};
