import React, { Component } from 'react';
import { isEqual } from 'lodash';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { GATHER_UI_DROPDOWN } from './consts';

const CONTENT_BOUNDARY_PADDING = 40;

class DropdownContent extends Component {
  state = {
    style: {}
  };

  componentDidUpdate() {
    const newStyle = this.getStyle();

    if (!isEqual(newStyle, this.state.style)) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ style: newStyle });
    }
  }

  getTopPosition = (pos, bounds, contentBounds) => {
    let newPos = pos;

    const originalExceedsHeight = pos > window.innerHeight;

    if (originalExceedsHeight) {
      newPos = bounds.top - contentBounds.height;
    }

    if (pos !== newPos) {
      const newPositionPrecedesHeight = newPos < 0;
      return newPositionPrecedesHeight
        ? bounds.top - contentBounds.height / 2
        : newPos;
    }

    return bounds.bottom;
  };

  getLeftPosition = (pos, bounds, contentBounds) => {
    let newPos = pos;

    const originalExceedsWidth = pos > window.innerWidth;

    if (originalExceedsWidth) {
      newPos = bounds.left - contentBounds.width;
    }

    if (pos !== newPos) {
      const newPositionPrecedesWidth = newPos < 0;
      return newPositionPrecedesWidth
        ? bounds.right - contentBounds.width / 2
        : newPos;
    }

    return this.props.autoPositionLeft ? bounds.left : bounds.right;
  };

  getStyle = () => {
    const { autoPosition, bounds, showContent } = this.context[
      GATHER_UI_DROPDOWN
    ];

    if (this.content && autoPosition && showContent) {
      const contentBounds = this.content.getBoundingClientRect();

      const bottomOfDropdownContent =
        bounds.top !== 'auto'
          ? bounds.top + contentBounds.height + CONTENT_BOUNDARY_PADDING
          : bounds.top;

      const rightOfDropdownContent =
        bounds.left !== 'auto'
          ? bounds.left + contentBounds.width + CONTENT_BOUNDARY_PADDING
          : bounds.left;

      return {
        top: this.getTopPosition(
          bottomOfDropdownContent,
          bounds,
          contentBounds
        ),
        left: this.getLeftPosition(
          rightOfDropdownContent,
          bounds,
          contentBounds
        )
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
    const classNames = cx(
      `dropdown__content border border-solid border-neutral-90 rounded shadow ${className}`,
      {
        'is-active': showContent,
        'dropdown__content--collapse': collapse,
        'dropdown__content--right': right,
        'dropdown__content--centre': centre,
        'dropdown__content--top': top,
        'dropdown__content--fix-right': fixRight,
        'dropdown__content--full': full,
        'dropdown__content--noborder': noBorder
      }
    );

    return (
      <div
        className={classNames}
        style={this.state.style}
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
  noBorder: PropTypes.bool,
  autoPositionLeft: PropTypes.bool
};

DropdownContent.defaultProps = {
  className: '',
  collapse: false,
  right: false,
  centre: false,
  top: false,
  fixRight: false,
  full: false,
  noBorder: false,
  autoPositionLeft: false
};

export default DropdownContent;
