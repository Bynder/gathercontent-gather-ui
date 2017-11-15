import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Label = ({
  label,
  id,
  subtitle,
  className,
  highlight,
  active,
  highlightHover
}) => {
  const textElementClasses = cx('form-input__text', {
    'form__input-text--highlight': highlight,
    'highlight-active': highlightHover,
    'is-active': active
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
  highlightHover: PropTypes.bool.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  highlight: PropTypes.bool,
  active: PropTypes.bool
};

Label.defaultProps = {
  subtitle: '',
  className: '',
  highlight: false,
  active: false
};

export default Label;
