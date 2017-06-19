import React, { Component, PropTypes } from 'react';

/**
 * @usage
 *
 * <Button
 *  types={['clear', 'collapsed']}
 *  clickHandler={() => {}}
 * >
 *   ...test goes here
 * </Button>
 */
class Button extends Component {
  static defaultProps = {
    types: ['primary'],
    disableOnClick: false,
    disabled: false,
    className: '',
    isSubmit: false
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    clickHandler: PropTypes.func.isRequired,
    types: PropTypes.arrayOf(PropTypes.string),
    disabled: PropTypes.bool,
    disableOnClick: PropTypes.bool,
    className: PropTypes.string,
    isSubmit: PropTypes.bool,
  };

  constructor() {
    super();

    this.defaultProps = {
      types: ['primary'],
      disableOnClick: false,
      disabled: false,
      className: '',
      isSubmit: false,
    };

    this.state = {
      disabled: false,
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.getTypeClasses = this.getTypeClasses.bind(this);
  }

  getTypeClasses() {
    return this.props.types.reduce((typeClasses, type) => `${typeClasses} button--${type}`, 'button');
  }

  handleOnClick() {
    this.setState({ disabled: this.props.disableOnClick });
    this.props.clickHandler();
  }

  render() {
    const { disabled, children, className, isSubmit } = this.props;

    return (
      <button
        disabled={disabled || this.state.disabled}
        onClick={this.handleOnClick}
        className={`${this.getTypeClasses()} ${className}`}
        type={(isSubmit) ? 'submit' : 'button'}
      >
        { children }
      </button>
    );
  }
}

export default Button;
