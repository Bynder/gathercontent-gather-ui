import React, { PropTypes } from 'react';
import cx from 'classnames';

const ProgressBar = ({ className, children }) => {
  const classes = cx(['c-progress-bar', className]);

  return (
    <div className={classes}>
      { children }
    </div>
  );
};

ProgressBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ProgressBar.defaultProps = {
  className: '',
};

export default ProgressBar;
