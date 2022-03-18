import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { isFunction } from 'lodash';
import Button from '../Button';
import Icon from '../Icon';
import { DropdownContext } from './DropdownProvider';

class DropdownTrigger extends Component {
  static contextType = DropdownContext;

  handleClick = event => {
    const { toggleShowContent, autoPosition, showContent } = this.context;

    this.props.onClick(!showContent, event);

    if (this.trigger && autoPosition) {
      const bounds = this.trigger.getBoundingClientRect();
      return toggleShowContent(bounds);
    }

    return toggleShowContent();
  };

  handleMouseover = event => {
    if (this.props.useHover) {
      const { toggleShowContent, autoPosition, showContent } = this.context;

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
      useButton,
      useSelect,
      types,
      direction,
      triggerClassName,
      blueOnActive,
      useHover,
      ...rest
    } = this.props;
    const { showContent } = this.context;
    const createRef = trigger => {
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
