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
  const className = cx("gui-loading-overlay", {
    "gui-loading-overlay--fixed": fixed,
  });

  return (
    <div className={className} role="status">
      <div className="gui-loading-overlay__content gui-weight-semi-bold gui-text-align-center">
        {!hideSVG && useSpinner && <Loader isOverlay />}
        {!hideSVG && !useSpinner && (
          // @ts-expect-error Type '{ title: string; }' is not assignable to type
          <LoadingSVG title="Loading" />
        )}
        {percentageLoaded > 0 && (
          <>
            <p className="gui-loading-overlay-text">{loadingText}</p>
            <p className="gui-h-margin-clear gui-color-neutral-base">{`${percentageLoaded}%`}</p>
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
