import React, { Fragment } from "react";
import cx from "classnames";
import LoadingSVG from "../../assets/loading.svg";
import { Loader } from "../src/modules/loader/Loader";

export function LoadingOverlay({
  fixed,
  hideSVG,
  percentageLoaded,
  loadingText,
  useSpinner,
}: any) {
  const className = cx("loading-overlay", {
    "loading-overlay--fixed": fixed,
  });

  return (
    <div className={className} role="status">
      <div className="loading-overlay__content weight-semi-bold text-align-center">
        {!hideSVG && useSpinner ? (
          <Loader isOverlay />
        ) : (
          // @ts-expect-error Type '{ title: string; }' is not assignable to type
          <LoadingSVG title="Loading" />
        )}
        {percentageLoaded > 0 && (
          <>
            <p className="loading-overlay-text">{loadingText}</p>
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
  useSpinner: false,
  percentageLoaded: 0,
  loadingText: "Loading",
};

export default LoadingOverlay;
