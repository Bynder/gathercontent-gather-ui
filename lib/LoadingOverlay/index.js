import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import loadingSVG from '../../assets/loading.svg';

const LoadingOverlay = ({ fixed, hideSVG }) => {
  const className = cx('loading-overlay', {
    'loading-overlay--fixed': fixed
  });

  return <div className={className}>{!hideSVG && loadingSVG()}</div>;
};

LoadingOverlay.propTypes = {
  fixed: PropTypes.bool,
  hideSVG: PropTypes.bool
};

LoadingOverlay.defaultProps = {
  fixed: false,
  hideSVG: false
};

export default LoadingOverlay;
