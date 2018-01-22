import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import loadingSVG from '../../assets/loading.svg';

const LoadingOverlay = ({ fixed }) => {
  const className = cx('loading-overlay', {
    'loading-overlay--fixed': fixed
  });

  return (
    <div className={className}>
      { loadingSVG() }
    </div>
  );
};

LoadingOverlay.propTypes = {
  fixed: PropTypes.bool
};

LoadingOverlay.defaultProps = {
  fixed: false
};

export default LoadingOverlay;
