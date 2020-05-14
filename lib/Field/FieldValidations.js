import React from 'react';
import PropTypes from 'prop-types';

const FieldValidations = props => {
  const validations = props.validations.map(validation => {
    const cssClass = validation.hasFailed ? 'color-overdue' : '';

    return (
      <span
        key={`${props.fieldId}-validation-${validation.text}`}
        className={`field__validation ${cssClass}`}
      >
        {validation.text}
      </span>
    );
  });

  return (
    <div className={`field__validations ${props.className}`}>{validations}</div>
  );
};

FieldValidations.propTypes = {
  validations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  fieldId: PropTypes.string.isRequired,
  className: PropTypes.string
};

FieldValidations.defaultProps = {
  className: ''
};

export default FieldValidations;
