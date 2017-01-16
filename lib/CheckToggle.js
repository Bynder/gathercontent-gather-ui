import React, { Component, PropTypes } from 'react';

class CheckToggle extends Component {
  constructor(props) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);

    this.state = {
      checked: props.checked,
    };
  }

  onClickHandler() {
    this.props.clickHandler();
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { labelLeft, labelRight } = this.props;

    return (
      <div className="toggle-wrapper toggle-wrapper--pricing">
        <p className="toggle-wrapper__label toggle-wrapper__label--on">{ labelLeft }</p>
        <span>
          <input
            onChange={this.onClickHandler}
            checked={this.state.checked}
            type="checkbox"
            id="quick-view"
            className="toggle-switch toggle-switch--inline ajax-quick-view"
          />
          <label className="toggle-switch__label toggle-switch--pricing" htmlFor="quick-view" />
        </span>
        <p className="toggle-wrapper__label">
          { labelRight }
          <small className="toggle-wrapper__annual">
            (2 months free)
          </small>
        </p>
      </div>
    );
  }
}

CheckToggle.propTypes = {
  checked: PropTypes.bool,
  clickHandler: PropTypes.func,
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
};

CheckToggle.defaultProps = {
  labelLeft: null,
  labelRight: null,
  clickHandler: null,
  checked: false,
};

export default CheckToggle;
