import React from "react";
import { string } from "prop-types";
import cx from "classnames";
import { Icon } from "lib";

function Loader({ heading, progress, size, className }: any) {
  const baseClassNames = `gc-loader flex items-center flex-col justify-center ${className}`;
  const classNames = cx(baseClassNames, {
    "loader-sm": size === "sm",
    "loader-md": size === "md",
    "loader-lrg": size === "lrg" || progress,
  });

  return (
    <div className={classNames}>
      {heading && (
        <div className="loader-heading weight-semi-bold mb-2">{heading}</div>
      )}

      <div className="loader-spinner flex items-center justify-center w-full">
        <Icon name="loader" />

        <div className="loader-progress absolute text-sm text-neutral-primary">
          {progress}
        </div>
      </div>
    </div>
  );
}

Loader.propTypes = {
  heading: string,
  progress: string,
};

Loader.defaultProps = {
  heading: null,
  progress: null,
};

export { Loader };
