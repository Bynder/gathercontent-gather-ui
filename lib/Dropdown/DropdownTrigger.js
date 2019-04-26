import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Button, Icon } from '../index';
import { GATHER_UI_DROPDOWN } from './index';

class DropdownTrigger extends Component {
  handleClick = () => {
    const { toggleShowContent, autoPosition } = this.context[
      GATHER_UI_DROPDOWN
    ];
    if (this.trigger && autoPosition) {
      const bounds = this.trigger.getBoundingClientRect();
      return toggleShowContent(bounds);
    }
    return toggleShowContent();
  };

  render() {
    const {
      children,
      useButton,
      useSelect,
      types,
      direction,
      ...rest
    } = this.props;
    const { showContent } = this.context[GATHER_UI_DROPDOWN];
    const createRef = trigger => {
      this.trigger = trigger;
    };
    const wrapperClassNames = cx(`dropdown__trigger-wrapper--${direction}`, {
      'dropdown__trigger-wrapper': useButton,
      'dropdown__trigger-wrapper--select': useSelect
    });
    const buttonClassNames = cx({
      'is-active': showContent,
      dropdown__trigger: !useButton && !useSelect
    });

    const buttonTypes = useSelect ? types.concat('outline') : types;

    if (useButton || useSelect) {
      return (
        <div ref={createRef} className={wrapperClassNames}>
          <Button
            types={buttonTypes}
            className={buttonClassNames}
            {...rest}
            onClick={this.handleClick}
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
        ref={createRef}
      >
        {children}
      </button>
    );
  }
}

DropdownTrigger.contextTypes = {
  GATHER_UI_DROPDOWN: PropTypes.shape().isRequired
};

DropdownTrigger.propTypes = {
  children: PropTypes.node.isRequired,
  useButton: PropTypes.bool,
  useSelect: PropTypes.bool,
  direction: PropTypes.string,
  types: PropTypes.arrayOf(PropTypes.string)
};

DropdownTrigger.defaultProps = {
  useButton: false,
  useSelect: false,
  direction: 'top',
  types: []
};

export default DropdownTrigger;
