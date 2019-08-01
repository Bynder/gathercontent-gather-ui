import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { GATHER_UI_DROPDOWN } from './consts';

class DropdownContent extends Component {
  getTopPosition = (pos, bounds, contentBounds) => {
    let newPos = pos;

    const originalExceedsHeight = pos + 10 > window.innerHeight;
    const originalPositionPrecedesHeight = pos - 10 < window.innerHeight;

    if (originalExceedsHeight) {
      newPos = bounds.top - contentBounds.height;
    }

    if (pos !== newPos) {
      const newPositionPrecedesHeight = newPos < 0;
      return newPositionPrecedesHeight
        ? bounds.top - contentBounds.height / 2
        : newPos;
    }

    return originalPositionPrecedesHeight ? bounds.bottom : newPos;
  };

  getLeftPosition = (pos, bounds, contentBounds) => {
    let newPos = pos;

    const originalExceedsWidth = pos + 10 > window.innerWidth;
    const originalPositionPrecedesWidth = pos - 10 < window.innerWidth;

    if (originalExceedsWidth) {
      newPos = bounds.left - contentBounds.width - 10;
    }

    if (pos !== newPos) {
      const newPositionPrecedesWidth = newPos < 0;
      return newPositionPrecedesWidth
        ? bounds.right - contentBounds.width / 2
        : newPos;
    }

    return originalPositionPrecedesWidth ? bounds.right : newPos;
  };

  getStyle = () => {
    const { autoPosition, bounds, showContent } = this.context[
      GATHER_UI_DROPDOWN
    ];

    if (this.content && autoPosition && showContent) {
      const contentBounds = this.content.getBoundingClientRect();

      const topPos =
        bounds.top !== 'auto'
          ? bounds.top + contentBounds.height + 40
          : bounds.top;
      const leftPos =
        bounds.left !== 'auto'
          ? bounds.left + contentBounds.width + 40
          : bounds.left;

      return {
        top: this.getTopPosition(topPos, bounds, contentBounds),
        left: this.getLeftPosition(leftPos, bounds, contentBounds)
      };
    }

    if (autoPosition && !showContent) {
      return {
        left: -99999,
        top: -99999
      };
    }

    return null;
  };

  render() {
    const {
      children,
      right,
      centre,
      top,
      fixRight,
      collapse,
      className,
      full,
      noBorder
    } = this.props;
    const { showContent } = this.context[GATHER_UI_DROPDOWN];
    const classNames = cx(`dropdown__content ${className}`, {
      'is-active': showContent,
      'dropdown__content--collapse': collapse,
      'dropdown__content--right': right,
      'dropdown__content--centre': centre,
      'dropdown__content--top': top,
      'dropdown__content--fix-right': fixRight,
      'dropdown__content--full': full,
      'dropdown__content--noborder': noBorder
    });

    return (
      <div
        className={classNames}
        style={this.getStyle()}
        ref={content => {
          this.content = content;
        }}
      >
        {typeof children === 'function' ? children(showContent) : children}
      </div>
    );
  }
}

DropdownContent.contextTypes = {
  GATHER_UI_DROPDOWN: PropTypes.shape().isRequired
};

DropdownContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  className: PropTypes.string,
  collapse: PropTypes.bool,
  right: PropTypes.bool,
  centre: PropTypes.bool,
  top: PropTypes.bool,
  fixRight: PropTypes.bool,
  full: PropTypes.bool,
  noBorder: PropTypes.bool
};

DropdownContent.defaultProps = {
  className: '',
  collapse: false,
  right: false,
  centre: false,
  top: false,
  fixRight: false,
  full: false,
  noBorder: false
};

export default DropdownContent;
