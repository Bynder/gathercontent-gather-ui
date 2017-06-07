import React from 'react';
import PropTypes from 'prop-types';

const FieldValidations = (props) => {
  const validations = props.validations.map(action => {
    const cssClass = (action.hasFailed) ? 'has-failed' : '';

    return (
      <span className={`field__validation ${cssClass}`}>{action.text}</span>
    )
  });

  return (
    <div className="field__validations">{validations}</div>
  )
};

FieldValidations.propTypes = {
  validations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default FieldValidations;
