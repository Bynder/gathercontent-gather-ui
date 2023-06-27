import PropTypes from 'prop-types';
import React, { Component } from 'react';
import cx from 'classnames';

class CheckToggle extends Component {
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

  constructor(props: any) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);

    this.state = {
      checked: props.checked
    };
  }

  onClickHandler() {
    // @ts-expect-error TS(2339): Property 'clickHandler' does not exist on type 'Re... Remove this comment to see the full error message
    this.props.clickHandler();
    // @ts-expect-error TS(2339): Property 'checked' does not exist on type 'Readonl... Remove this comment to see the full error message
    this.setState(prevState => ({ checked: !prevState.checked }));
  }

  render() {
    const {
      // @ts-expect-error TS(2339): Property 'labelLeft' does not exist on type 'Reado... Remove this comment to see the full error message
      labelLeft,
      // @ts-expect-error TS(2339): Property 'labelRight' does not exist on type 'Read... Remove this comment to see the full error message
      labelRight,
      // @ts-expect-error TS(2339): Property 'id' does not exist on type 'Readonly<{}>... Remove this comment to see the full error message
      id,
      // @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
      className,
      // @ts-expect-error TS(2339): Property 'displaySmall' does not exist on type 'Re... Remove this comment to see the full error message
      displaySmall,
      // @ts-expect-error TS(2339): Property 'displayChecked' does not exist on type '... Remove this comment to see the full error message
      displayChecked,
      // @ts-expect-error TS(2339): Property 'spaceBetween' does not exist on type 'Re... Remove this comment to see the full error message
      spaceBetween,
      // @ts-expect-error TS(2339): Property 'disabled' does not exist on type 'Readon... Remove this comment to see the full error message
      disabled,
      // @ts-expect-error TS(2339): Property 'labelSizeLarge' does not exist on type '... Remove this comment to see the full error message
      labelSizeLarge,
      // @ts-expect-error TS(2339): Property 'marginSizeLarge' does not exist on type ... Remove this comment to see the full error message
      marginSizeLarge,
      // @ts-expect-error TS(2339): Property 'toggleClasses' does not exist on type 'R... Remove this comment to see the full error message
      toggleClasses
    } = this.props;

    // @ts-expect-error TS(2339): Property 'autoToggle' does not exist on type 'Read... Remove this comment to see the full error message
    const checked = this.props.autoToggle
      // @ts-expect-error TS(2339): Property 'checked' does not exist on type 'Readonl... Remove this comment to see the full error message
      ? this.state.checked
      // @ts-expect-error TS(2339): Property 'checked' does not exist on type 'Readonl... Remove this comment to see the full error message
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
