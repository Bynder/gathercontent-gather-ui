import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FieldNew } from 'lib';
import cx from 'classnames';

const FieldValidations = props => {
  const { inStructureEditMode } = useContext(
    FieldNew.InStructureEditModeContext
  );

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
    <div
      className={cx(props.className, 'field__validations', {
        'pr-5': inStructureEditMode
      })}
    >
      {validations}
    </div>
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
