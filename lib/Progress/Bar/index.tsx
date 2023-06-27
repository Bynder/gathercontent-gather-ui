import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const ProgressBar = ({
  className,
  children
}: any) => {
  const classes = cx(['progress__bar', className]);

  return <div className={classes}>{children}</div>;
};

ProgressBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ProgressBar.defaultProps = {
  className: ''
};

export default ProgressBar;
