import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Label = ({ label, id, subtitle, className, highlight }) => {
  const textElementClasses = cx('form-input__text', {
    'form__input-text--highlight': highlight
  });

  return (
    <label htmlFor={id} className={`form-checkbox__label ${className}`}>
      <span className={textElementClasses}>{label}</span>
      {subtitle && <span className="form-checkbox__subtitle">{subtitle}</span>}
    </label>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  highlight: PropTypes.bool
};

Label.defaultProps = {
  subtitle: '',
  className: '',
  highlight: false
};

export default Label;
