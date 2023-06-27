import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const TopBarCell = props => {
  const classes = cx(`top-bar__cell ${props.className}`, {
    'top-bar__cell--bordered': props.bordered
  });
  return <div className={classes}>{props.children}</div>;
};

TopBarCell.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.shape())
  ]),
  className: PropTypes.string
};

TopBarCell.defaultProps = {
  bordered: false,
  children: [],
  className: ''
};

export default TopBarCell;
