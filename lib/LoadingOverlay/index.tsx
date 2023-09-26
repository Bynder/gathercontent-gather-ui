import React, { Fragment } from "react";
import cx from "classnames";
import LoadingSVG from "../../assets/loading.svg";

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
    <div className={className} role="status">
      <div className="loading-overlay__content weight-semi-bold text-align-center">
        {/* @ts-expect-error Type '{ title: string; }' is not assignable to type */}
        {!hideSVG && <LoadingSVG title="Loading" />}
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

LoadingOverlay.defaultProps = {
  fixed: false,
  hideSVG: false,
  percentageLoaded: 0,
  loadingText: "Loading",
};

export default LoadingOverlay;
