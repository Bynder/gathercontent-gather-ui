import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ label, id, subtitle, className }) => (
  <label
    htmlFor={id}
    className={`form-checkbox__label ${className}`}
  >
    {label}
    {subtitle &&
      <span className="form-checkbox__subtitle">{subtitle}</span>
    }
  </label>
);

Label.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
};

Label.defaultProps = {
  subtitle: '',
  className: '',
};

export default Label;
