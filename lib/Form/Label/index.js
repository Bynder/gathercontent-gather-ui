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
  labelClick,
  inputOnly
}) => {
  const textElementClasses = cx('form-input__text', {
    'is-highlight': highlight,
    'is-highlight--active': highlightHover,
    'is-active': active
  });

  const handleOnClick = event => {
    if (inputOnly && labelClick) {
      event.preventDefault();
      return labelClick();
    } else if (labelClick) {
      return labelClick();
    }
    return null;
  };

  return (
    <label
      htmlFor={id}
      className={`form-checkbox__label ${className}`}
      onClick={handleOnClick}
    >
      <span className={textElementClasses}>{label}</span>
      {subtitle && <span className="form-checkbox__subtitle">{subtitle}</span>}
    </label>
  );
};

Label.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
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
