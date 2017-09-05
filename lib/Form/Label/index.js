import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ label, id, subtitle }) => (
  <label htmlFor={id} className="form-checkbox__label">
    {label}
    {subtitle &&
      <span className="form-checkbox__label__subtitle">{subtitle}</span>
    }
  </label>
);

Label.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

Label.defaultProps = {
  subtitle: '',
};

export default Label;
