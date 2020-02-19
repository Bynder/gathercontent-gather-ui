import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import loadingSVG from '../../assets/loading.svg';

const LoadingOverlay = ({ fixed, hideSVG, percentageText }) => {
  const className = cx('loading-overlay', {
    'loading-overlay--fixed': fixed
  });

  return (
    <div className={className}>
      <div className="loading-overlay__content">
        {!hideSVG && loadingSVG()}
        {percentageText && (
          <Fragment>
            <p className="h-margin-bottom-quarter h-margin-top-clear">
              Loading
            </p>
            <p className="h-margin-clear">{percentageText}</p>
          </Fragment>
        )}
      </div>
    </div>
  );
};

LoadingOverlay.propTypes = {
  fixed: PropTypes.bool,
  hideSVG: PropTypes.bool,
  percentageText: PropTypes.string
};

LoadingOverlay.defaultProps = {
  fixed: false,
  hideSVG: false,
  percentageText: null
};

export default LoadingOverlay;
