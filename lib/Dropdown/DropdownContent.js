import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import { GATHER_UI_DROPDOWN } from './index';

const DropdownContent = ({ children }, context) => {
  const { showContent } = context[GATHER_UI_DROPDOWN];
  const classNames = cx('dropdown__content', {
    'is-active': showContent
  });

  return <div className={classNames}>{children}</div>;
};

DropdownContent.contextTypes = {
  GATHER_UI_DROPDOWN: PropTypes.shape().isRequired
};

DropdownContent.propTypes = {
  children: PropTypes.node.isRequired
};

export default DropdownContent;
