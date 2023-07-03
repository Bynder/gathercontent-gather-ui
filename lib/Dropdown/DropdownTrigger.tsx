import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isFunction } from 'lodash';
import Button from '../Button';
import Icon from '../Icon';
import { DropdownContext } from './DropdownProvider';

class DropdownTrigger extends Component {
  static contextType = DropdownContext;

  trigger: any;

  handleClick = (event: any) => {
    const { toggleShowContent, autoPosition, showContent } = this.context;

    // @ts-expect-error TS(2339): Property 'onClick' does not exist on type 'Readonl... Remove this comment to see the full error message
    this.props.onClick(!showContent, event);

    if (this.trigger && autoPosition) {
      const bounds = this.trigger.getBoundingClientRect();
      return toggleShowContent(bounds);
    }

    return toggleShowContent();
  };

  handleMouseover = (event: any) => {
    // @ts-expect-error TS(2339): Property 'useHover' does not exist on type 'Readon... Remove this comment to see the full error message
    if (this.props.useHover) {
      const { toggleShowContent, autoPosition, showContent } = this.context;

      // @ts-expect-error TS(2339): Property 'onClick' does not exist on type 'Readonl... Remove this comment to see the full error message
      this.props.onClick(!showContent, event);

      if (this.trigger && autoPosition) {
        const bounds = this.trigger.getBoundingClientRect();
        return toggleShowContent(bounds);
      }

      return toggleShowContent();
    }
    return null;
  };

  render() {
    const {
      children,
      // @ts-expect-error TS(2339): Property 'useButton' does not exist on type 'Reado... Remove this comment to see the full error message
      useButton,
      // @ts-expect-error TS(2339): Property 'useSelect' does not exist on type 'Reado... Remove this comment to see the full error message
      useSelect,
      // @ts-expect-error TS(2339): Property 'types' does not exist on type 'Readonly<... Remove this comment to see the full error message
      types,
      // @ts-expect-error TS(2339): Property 'direction' does not exist on type 'Reado... Remove this comment to see the full error message
      direction,
      // @ts-expect-error TS(2339): Property 'triggerClassName' does not exist on type... Remove this comment to see the full error message
      triggerClassName,
      // @ts-expect-error TS(2339): Property 'blueOnActive' does not exist on type 'Re... Remove this comment to see the full error message
      blueOnActive,
      // @ts-expect-error TS(2339): Property 'useHover' does not exist on type 'Readon... Remove this comment to see the full error message
      useHover,
      ...rest
    } = this.props;
    const { showContent } = this.context;
    const createRef = (trigger: any) => {
      this.trigger = trigger;
    };
    const wrapperClassNames = cx(`dropdown__trigger-wrapper--${direction}`, {
      'dropdown__trigger-wrapper': useButton,
      'dropdown__trigger-wrapper--select': useSelect
    });
    const buttonClassNames = cx(triggerClassName, {
      'is-active': showContent,
      dropdown__trigger: !useButton && !useSelect,
      'primary-blue-text': blueOnActive && showContent
    });

    const buttonTypes = useSelect ? types.concat('outline') : types;

    if (isFunction(children)) {
      return (
        <div className={triggerClassName} ref={createRef}>
          {children({ toggleShowContent: this.handleClick })}
        </div>
      );
    }

    if (useButton || useSelect) {
      return (
        <div ref={createRef} className={wrapperClassNames}>
          <Button
            types={buttonTypes}
            className={buttonClassNames}
            {...rest}
            onClick={this.handleClick}
            onMouseEnter={this.handleMouseover}
          >
            {children}
            {useSelect && <Icon name="down" />}
          </Button>
        </div>
      );
    }

    return (
      <button
        type="button"
        {...rest}
        className={buttonClassNames}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseover}
        ref={createRef}
      >
        {children}
      </button>
    );
  }
}

// @ts-expect-error TS(2339): Property 'propTypes' does not exist on type 'typeo... Remove this comment to see the full error message
DropdownTrigger.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  useButton: PropTypes.bool,
  useSelect: PropTypes.bool,
  direction: PropTypes.string,
  triggerClassName: PropTypes.string,
  onClick: PropTypes.func,
  types: PropTypes.arrayOf(PropTypes.string),
  blueOnActive: PropTypes.bool,
  useHover: PropTypes.bool
};

// @ts-expect-error TS(2339): Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
DropdownTrigger.defaultProps = {
  useButton: false,
  useSelect: false,
  direction: 'top',
  triggerClassName: '',
  onClick: () => {},
  types: [],
  blueOnActive: false,
  useHover: false
};

export default DropdownTrigger;
