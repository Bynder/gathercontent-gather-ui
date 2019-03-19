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
    displayChecked: PropTypes.bool
  };

  static defaultProps = {
    labelLeft: null,
    labelRight: null,
    clickHandler() {},
    checked: false,
    className: '',
    displaySmall: false,
    displayChecked: false
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
      displayChecked
    } = this.props;

    const additionalClasses = cx(`toggle-wrapper ${className}`, {
      'size-small': displaySmall,
      'is-checked': displayChecked && this.state.checked
    });

    return (
      <div className={additionalClasses}>
        {labelLeft && <p className="toggle-wrapper__label">{labelLeft}</p>}
        <span className="toggle-wrapper__inner">
          <input
            onChange={this.onClickHandler}
            checked={this.state.checked}
            type="checkbox"
            id={id}
            className="toggle-switch toggle-switch--inline"
          />
          {/* prettier-ignore */}
          <label // eslint-disable-line jsx-a11y/label-has-associated-control
            data-label-id
            className="toggle-switch__label"
            htmlFor={id}
          />
        </span>
        {labelRight && <p className="toggle-wrapper__label">{labelRight}</p>}
      </div>
    );
  }
}

export default CheckToggle;
