import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

function Label({
  label,
  id,
  subtitle,
  className,
  highlight,
  labelMouseEnter,
  labelMouseLeave,
  overrideLabelDefault,
  active,
  disabled,
  hinted
}: any) {
  const labelClasses = cx(`form-checkbox__label ${className}`, {
    'is-disabled': disabled,
    'form-checkbox__label--hinted': hinted
  });

  const textElementClasses = cx('form-input__text', {
    'is-highlight': highlight,
    'is-active': active
  });

  const buttonElementClasses = cx({
    'is-highlight': highlight
  });

  const handleOnClick = () => {
    if (typeof overrideLabelDefault === 'function') {
      overrideLabelDefault();
    }
  };

  if (overrideLabelDefault) {
    return (
      <button
        type="button"
        className={`form-checkbox__label--button ${className} ${buttonElementClasses}`}
        onClick={handleOnClick}
        onMouseEnter={labelMouseEnter}
        onMouseLeave={labelMouseLeave}
      >
        <span className={textElementClasses}>{label}</span>
        {subtitle && (
          <span className="form-checkbox__subtitle">{subtitle}</span>
        )}
      </button>
    );
  }
  return (
    <label htmlFor={id} className={labelClasses}>
      <span className={textElementClasses}>{label}</span>
      {subtitle && <span className="form-checkbox__subtitle">{subtitle}</span>}
    </label>
  );
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  overrideLabelDefault: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  labelMouseEnter: PropTypes.func,
  labelMouseLeave: PropTypes.func,
  active: PropTypes.bool,
  subtitle: PropTypes.string,
  className: PropTypes.string,
  highlight: PropTypes.bool,
  disabled: PropTypes.bool,
  hinted: PropTypes.bool
};

Label.defaultProps = {
  subtitle: '',
  className: '',
  highlight: false,
  overrideLabelDefault: false,
  labelMouseEnter: () => {},
  labelMouseLeave: () => {},
  active: false,
  disabled: false,
  hinted: false
};

export default Label;
