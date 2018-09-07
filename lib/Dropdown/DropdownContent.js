import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { GATHER_UI_DROPDOWN } from './index';

class DropdownContent extends Component {
  getStyle = () => {
    const { autoPosition, bounds, showContent } = this.context[
      GATHER_UI_DROPDOWN
    ];
    if (this.content && autoPosition && showContent) {
      const contentBounds = this.content.getBoundingClientRect();
      const totalPos =
        bounds.top !== 'auto' ? bounds.top + contentBounds.height : bounds.top;
      const left = bounds.left + bounds.width + 20;
      if (totalPos + 10 > window.innerHeight) {
        return {
          top:
            bounds.top -
            (bounds.top + contentBounds.height - window.innerHeight) -
            40,
          left
        };
      }
      return { top: bounds.top - 20, left };
    }
    if (autoPosition && !showContent) {
      return {
        left: -99999,
        top: 'auto'
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
  noBorder: PropTypes.bool
};

DropdownContent.defaultProps = {
  className: '',
  collapse: false,
  right: false,
  centre: false,
  top: false,
  fixRight: false,
  noBorder: false
};

export default DropdownContent;
