import React from "react";
import cx from "classnames";
import { Icon } from "lib";

function Loader({ heading, progress, size, className, isOverlay }: any) {
  const baseClassNames = `gui-gc-loader flex items-center flex-col justify-center ${className}`;
  const classNames = cx(baseClassNames, {
    "gui-loader-sm": size === "sm",
    "gui-loader-md": size === "md",
    "gui-loader-overlay": isOverlay,
    "gui-loader-lrg": size === "lrg" || progress,
  });

  return (
    <div className={classNames}>
      {heading && (
        <div className="gui-loader-heading weight-semi-bold mb-2">
          {heading}
        </div>
      )}

      <div className="gui-loader-spinner flex items-center justify-center w-full">
        <Icon name="loader" />

        <div className="gui-loader-progress absolute text-sm text-neutral-primary">
          {progress}
        </div>
      </div>
    </div>
  );
}

Loader.defaultProps = {
  heading: null,
  progress: null,
};

export { Loader };
