import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { GATHER_UI_DROPDOWN } from './index';

const DropdownContent = (
  { children, right, centre, top, fixRight, collapse, className, noBackground },
  context
) => {
  const { showContent } = context[GATHER_UI_DROPDOWN];
  const classNames = cx(`dropdown__content ${className}`, {
    'is-active': showContent,
    'dropdown__content--collapse': collapse,
    'dropdown__content--right': right,
    'dropdown__content--centre': centre,
    'dropdown__content--top': top,
    'dropdown__content--fix-right': fixRight,
    'dropdown__content--noBg': noBackground
  });

  return (
    <div className={classNames}>
      {typeof children === 'function' ? children(showContent) : children}
    </div>
  );
};

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
  noBackground: PropTypes.bool
};

DropdownContent.defaultProps = {
  className: '',
  collapse: false,
  right: false,
  centre: false,
  top: false,
  fixRight: false,
  noBackground: false
};

export default DropdownContent;
