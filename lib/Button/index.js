import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createClassesFromTypesList } from '../helpers/classes';

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
    onClick: null,
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    id: null
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
    isSubmit: PropTypes.bool,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    id: PropTypes.string
  };

  constructor() {
    super();

    this.state = {
      disabled: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.setState({ disabled: this.props.disableOnClick });

    if (this.props.onClick) {
      return this.props.onClick(e);
    }

    return this.props.clickHandler(e);
  }

  render() {
    const {
      disabled,
      children,
      className,
      isSubmit,
      title,
      id,
      types,
      onMouseEnter,
      onMouseLeave
    } = this.props;

    const shareProps = {
      disabled: disabled || this.state.disabled,
      onClick: this.handleOnClick,
      className: `button ${createClassesFromTypesList(
        types,
        'button--'
      )} ${className}`,
      title,
      id,
      onMouseEnter,
      onMouseLeave
    };

    return isSubmit ? (
      <button type="submit" {...shareProps}>
        {children}
      </button>
    ) : (
      <button type="button" {...shareProps}>
        {children}
      </button>
    );
  }
}

export default Button;
