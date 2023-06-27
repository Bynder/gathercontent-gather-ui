import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TopBarGroup = props => {
  const classes = cx('top-bar__group', {
    'top-bar__group--collapse': props.collapse
  });
  return <div className={classes}>{props.children}</div>;
};

TopBarGroup.propTypes = {
  collapse: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ])
};

TopBarGroup.defaultProps = {
  collapse: false,
  children: []
};

export default TopBarGroup;
