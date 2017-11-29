import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const Label = ({
  label,
  id,
  subtitle,
  className,
  highlight,
  highlightHover,
  overrideLabelDefault,
  highlightIsHovered,
  highlightIsNotHovered,
  highlightActive
}) => {
  const textElementClasses = cx('form-input__text', {
    'is-highlight': highlight,
    'is-highlight--active': highlightHover,
    'is-active': highlightActive
  });

  const buttonElementClasses = cx({
    'is-highlight': highlight
  });

  const handleOnClick = () => {
    if (typeof overrideLabelDefault === 'function') {
      overrideLabelDefault();
    }
  };

  const labelIsHovered = () => {
    if (highlight) {
      highlightIsHovered();
    }
  };

  const labelIsNotHovered = () => {
    if (highlight) {
      highlightIsNotHovered();
    }
  };
  if (overrideLabelDefault) {
    return (
      <button
        className={`form-checkbox__label--button ${className} ${buttonElementClasses}`}
        onClick={handleOnClick}
        onMouseEnter={labelIsHovered}
        onMouseLeave={labelIsNotHovered}
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
  overrideLabelDefault: PropTypes.oneOfType([PropTypes.func, PropTypes.bool])
    .isRequired,
  highlightIsHovered: PropTypes.func.isRequired,
  highlightIsNotHovered: PropTypes.func.isRequired,
  highlightActive: PropTypes.bool.isRequired,
  highlightHover: PropTypes.bool,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  highlight: PropTypes.bool
};

Label.defaultProps = {
  subtitle: '',
  className: '',
  highlight: false,
  highlightHover: false
};

export default Label;
