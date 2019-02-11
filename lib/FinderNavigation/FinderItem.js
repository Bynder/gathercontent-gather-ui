import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const FinderItem = props => {
  const classNames = cx(`finder__item ${props.className}`, {
    'is-active': props.active,
    'finder__item--hover-settings': props.hoverSettings,
    'finder__item--selected': props.selected
  });
  return <div className={classNames}>{props.children}</div>;
};

FinderItem.propTypes = {
  children: PropTypes.node.isRequired,
  active: PropTypes.bool,
  className: PropTypes.string,
  hoverSettings: PropTypes.bool,
  selected: PropTypes.bool
};

FinderItem.defaultProps = {
  active: false,
  className: '',
  hoverSettings: true,
  selected: false
};

export default FinderItem;
