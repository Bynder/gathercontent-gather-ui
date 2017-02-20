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
    const { labelLeft, labelRight, id } = this.props;

    return (
      <div className="toggle-wrapper">
        { labelLeft && <p className="toggle-wrapper__label">{ labelLeft }</p> }
        <span className="toggle-wrapper__inner">
          <input
            onChange={this.onClickHandler}
            checked={this.state.checked}
            type="checkbox"
            id={id}
            className="toggle-switch toggle-switch--inline"
          />
          <label data-label-id className="toggle-switch__label" htmlFor={id} />
        </span>
        { labelRight && <p className="toggle-wrapper__label">{ labelRight }</p> }
      </div>
    );
  }
}

CheckToggle.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  clickHandler: PropTypes.func,
  labelLeft: PropTypes.string,
  labelRight: PropTypes.string,
};

CheckToggle.defaultProps = {
  labelLeft: null,
  labelRight: null,
  clickHandler() {},
  checked: false,
};

export default CheckToggle;
