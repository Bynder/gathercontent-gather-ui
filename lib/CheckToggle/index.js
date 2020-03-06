import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

class CheckToggle extends Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    clickHandler: PropTypes.func,
    labelLeft: PropTypes.string,
    labelRight: PropTypes.string,
    displaySmall: PropTypes.bool,
    displayChecked: PropTypes.bool,
    spaceBetween: PropTypes.bool,
    autoToggle: PropTypes.bool,
    labelSizeLarge: PropTypes.bool,
    disabled: PropTypes.bool,
    marginSizeLarge: PropTypes.bool
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
    marginSizeLarge: false
  };

  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);

    this.state = {
      checked: props.checked
    };
  }

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
      marginSizeLarge
    } = this.props;

    const checked = this.props.autoToggle
      ? this.state.checked
      : this.props.checked;

    const wrapperClasses = cx(`toggle-wrapper ${className}`, {
      'size-small': displaySmall,
      'is-checked': displayChecked && checked,
      'space-between': spaceBetween,
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
        {labelLeft && <p className={wrapperLabelClasses}>{labelLeft}</p>}
        <span className="toggle-wrapper__inner">
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
        {labelRight && <p className={wrapperLabelClasses}>{labelRight}</p>}
      </div>
    );
  }
}

export default CheckToggle;
