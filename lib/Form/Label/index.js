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
  highlightHover,
  overwriteLabelDefault
}) => {
  const textElementClasses = cx('form-input__text', {
    'is-highlight': highlight,
    'is-highlight--active': highlightHover,
    'is-active': active
  });

  const buttonElementClasses = cx({
    'is-highlight': highlight
  });

  const handleOnClick = () => {
    if (typeof overwriteLabelDefault === 'function') {
      overwriteLabelDefault();
    }
  };

  if (overwriteLabelDefault) {
    return (
      <button
        className={`form-checkbox__label--button ${className} ${buttonElementClasses}`}
        onClick={handleOnClick}
      >
        <span className={textElementClasses}>{label}</span>
        {subtitle && (
          <span className="form-checkbox__subtitle">{subtitle}</span>
        )}
      </button>
    );
  }
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
  overwriteLabelDefault: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
    .isRequired,
  highlightHover: PropTypes.bool,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  highlight: PropTypes.bool,
  active: PropTypes.bool
};

Label.defaultProps = {
  subtitle: '',
  className: '',
  highlight: false,
  highlightHover: false,
  active: false
};

export default Label;
