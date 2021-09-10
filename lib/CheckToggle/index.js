import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

class CheckToggle extends Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);

    this.state = {
      checked: props.checked
    };
  }

  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    clickHandler: PropTypes.func,
    labelLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    labelRight: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    displaySmall: PropTypes.bool,
    displayChecked: PropTypes.bool,
    spaceBetween: PropTypes.bool,
    autoToggle: PropTypes.bool,
    labelSizeLarge: PropTypes.bool,
    disabled: PropTypes.bool,
    marginSizeLarge: PropTypes.bool,
    toggleClasses: PropTypes.string
  };

  static defaultProps = {
    labelLeft: null,
    labelRight: null,
    clickHandler() {},
    checked: false,
    className: '',
    displaySmall: false,
    displayChecked: false,
    autoToggle: true,
    spaceBetween: false,
    disabled: false,
    labelSizeLarge: false,
    marginSizeLarge: false,
    toggleClasses: ''
  };

  onClickHandler() {
    this.props.clickHandler();
    this.setState(prevState => ({ checked: !prevState.checked }));
  }

  render() {
    const {
      labelLeft,
      labelRight,
      id,
      className,
      displaySmall,
      displayChecked,
      spaceBetween,
      disabled,
      labelSizeLarge,
      marginSizeLarge,
      toggleClasses
    } = this.props;

    const checked = this.props.autoToggle
      ? this.state.checked
      : this.props.checked;

    const wrapperClasses = cx(`toggle-wrapper ${className}`, {
      'size-small': displaySmall,
      'is-checked': displayChecked && checked,
      'h-justify-content-space-between': spaceBetween,
      'margin-large': marginSizeLarge,
      disabled
    });

    const switchLabelClasses = cx('toggle-switch__label', {
      'label-size-large': labelSizeLarge
    });

    const wrapperLabelClasses = cx('toggle-wrapper__label', {
      'label-size-large': labelSizeLarge
    });

    return (
      <div className={wrapperClasses}>
        {labelLeft && (
          <label htmlFor={id} className={wrapperLabelClasses}>
            {labelLeft}
          </label>
        )}
        <span className={`toggle-wrapper__inner ${toggleClasses}`}>
          <input
            data-testid={id}
            onChange={this.onClickHandler}
            checked={checked}
            type="checkbox"
            id={id}
            className="toggle-switch toggle-switch--inline"
          />
          {/* prettier-ignore */}
          <label // eslint-disable-line jsx-a11y/label-has-associated-control
            data-label-id
            className={switchLabelClasses}
            htmlFor={id}
          />
        </span>
        {labelRight && (
          <label htmlFor={id} className={wrapperLabelClasses}>
            {labelRight}
          </label>
        )}
      </div>
    );
  }
}

export default CheckToggle;
