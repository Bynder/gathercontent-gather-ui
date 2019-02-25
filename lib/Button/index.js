import PropTypes from 'prop-types';
import React, { Component } from 'react';

/**
 * @usage
 *
 * <Button
 *  types={['clear', 'collapsed']}
 *  clickHandler={() => {}}
 * >
 *   ...text goes here
 * </Button>
 */
class Button extends Component {
  static defaultProps = {
    types: ['primary'],
    disableOnClick: false,
    disabled: false,
    className: '',
    isSubmit: false,
    title: '',
    clickHandler: () => {},
    onClick: null
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    clickHandler: PropTypes.func,
    onClick: PropTypes.func,
    types: PropTypes.arrayOf(PropTypes.string),
    disabled: PropTypes.bool,
    disableOnClick: PropTypes.bool,
    className: PropTypes.string,
    title: PropTypes.string,
    isSubmit: PropTypes.bool
  };

  constructor() {
    super();

    this.state = {
      disabled: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
    this.getTypeClasses = this.getTypeClasses.bind(this);
  }

  getTypeClasses() {
    return this.props.types.reduce(
      (typeClasses, type) => `${typeClasses} button--${type}`,
      'button'
    );
  }

  handleOnClick(e) {
    this.setState({ disabled: this.props.disableOnClick });

    if (this.props.onClick) {
      return this.props.onClick(e);
    }

    return this.props.clickHandler(e);
  }

  render() {
    const { disabled, children, className, isSubmit, title } = this.props;

    return (
      <button
        disabled={disabled || this.state.disabled}
        onClick={this.handleOnClick}
        className={`${this.getTypeClasses()} ${className}`}
        type={isSubmit ? 'submit' : 'button'}
        title={title}
      >
        {children}
      </button>
    );
  }
}

export default Button;
