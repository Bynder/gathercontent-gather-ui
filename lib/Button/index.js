import React, { Component, PropTypes } from 'react';

// Ideally, we'd just be doing this, but we need to account for Sass
// mixins and settings... to study a bit more.
// require('./styles.scss');

class Button extends Component {
  static getClassName(type) {
    switch (type) {
      case 'primary':
        return 'btn btn--primary';
      case 'secondary':
        return 'btn btn--secondary';
      case 'danger':
        return 'btn btn--warning';
      case 'link':
        return 'btn btn--link';
      case 'clear':
        return 'btn btn--clear';
      case 'clear-and-collapsed':
        return 'btn btn--clear btn--collapsed';
      case 'neutral':
      default:
        return 'btn btn-default--light';
    }
  }

  constructor() {
    super();

    this.state = {
      disabled: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    this.setState({ disabled: this.props.disableOnClick });
    this.props.clickHandler();
  }

  render() {
    const { value, type, className, disable } = this.props;
    const classes = [Button.getClassName(type), className].join(' ').trim();

    return (
      <button disabled={disable || this.state.disabled} onClick={this.handleOnClick} className={classes}>{ value }</button>
    );
  }
}

Button.defaultProps = {
  type: 'primary',
  enabled: true,
  value: '',
  disableOnClick: false,
};

Button.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  clickHandler: PropTypes.func,
  disable: PropTypes.bool,
  disableOnClick: PropTypes.bool,
};

export default Button;
