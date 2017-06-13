import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ label, id }) => <label htmlFor={id} className="form-checkbox__label">{label}</label>;

Label.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Label;
