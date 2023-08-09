import React, { Fragment } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import loadingSVG from "../../assets/loading.svg";

export function LoadingOverlay({
  fixed,
  hideSVG,
  percentageLoaded,
  loadingText,
}: any) {
  const className = cx("loading-overlay", {
    "loading-overlay--fixed": fixed,
  });

  return (
    <div className={className}>
      <div className="loading-overlay__content weight-semi-bold text-align-center">
        {/* @ts-expect-error Expected 1-2 arguments, but got 0 */}
        {!hideSVG && loadingSVG()}
        {percentageLoaded > 0 && (
          <>
            <p className="h-margin-bottom-quarter h-margin-top-clear">
              {loadingText}
            </p>
            <p className="h-margin-clear color-neutral-base">{`${percentageLoaded}%`}</p>
          </>
        )}
      </div>
    </div>
  );
}

LoadingOverlay.propTypes = {
  fixed: PropTypes.bool,
  hideSVG: PropTypes.bool,
  percentageLoaded: PropTypes.number,
  loadingText: PropTypes.string,
};

LoadingOverlay.defaultProps = {
  fixed: false,
  hideSVG: false,
  percentageLoaded: 0,
  loadingText: "Loading",
};

export default LoadingOverlay;
