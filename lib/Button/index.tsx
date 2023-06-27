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
    onKeyDown: () => {},
    id: null
  };

  static propTypes = {
    children: PropTypes.node.isRequired,
    clickHandler: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
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
    // @ts-expect-error TS(2554): Expected 1-2 arguments, but got 0.
    super();

    this.state = {
      disabled: false
    };

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e: any) {
    // @ts-expect-error TS(2339): Property 'disableOnClick' does not exist on type '... Remove this comment to see the full error message
    this.setState({ disabled: this.props.disableOnClick });

    // @ts-expect-error TS(2339): Property 'onClick' does not exist on type 'Readonl... Remove this comment to see the full error message
    if (this.props.onClick) {
      // @ts-expect-error TS(2339): Property 'onClick' does not exist on type 'Readonl... Remove this comment to see the full error message
      return this.props.onClick(e);
    }

    // @ts-expect-error TS(2339): Property 'clickHandler' does not exist on type 'Re... Remove this comment to see the full error message
    return this.props.clickHandler(e);
  }

  render() {
    const {
      // @ts-expect-error TS(2339): Property 'disabled' does not exist on type 'Readon... Remove this comment to see the full error message
      disabled,
      children,
      // @ts-expect-error TS(2339): Property 'className' does not exist on type 'Reado... Remove this comment to see the full error message
      className,
      // @ts-expect-error TS(2339): Property 'isSubmit' does not exist on type 'Readon... Remove this comment to see the full error message
      isSubmit,
      // @ts-expect-error TS(2339): Property 'title' does not exist on type 'Readonly<... Remove this comment to see the full error message
      title,
      // @ts-expect-error TS(2339): Property 'id' does not exist on type 'Readonly<{}>... Remove this comment to see the full error message
      id,
      // @ts-expect-error TS(2339): Property 'types' does not exist on type 'Readonly<... Remove this comment to see the full error message
      types,
      // @ts-expect-error TS(2339): Property 'onMouseEnter' does not exist on type 'Re... Remove this comment to see the full error message
      onMouseEnter,
      // @ts-expect-error TS(2339): Property 'onMouseLeave' does not exist on type 'Re... Remove this comment to see the full error message
      onMouseLeave,
      // @ts-expect-error TS(2339): Property 'onKeyDown' does not exist on type 'Reado... Remove this comment to see the full error message
      onKeyDown
    } = this.props;

    const shareProps = {
      // @ts-expect-error TS(2339): Property 'disabled' does not exist on type 'Readon... Remove this comment to see the full error message
      disabled: disabled || this.state.disabled,
      onClick: this.handleOnClick,
      onKeyDown,
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
