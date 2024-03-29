import React from "react";
import { useImage } from "react-image";
import cx from "classnames";
// @ts-expect-error TS(2307): Cannot find module 'modules/loader/Loader' or its ... Remove this comment to see the full error message
import { Loader } from "modules/loader/Loader";
import PreviewFallback from "assets/previewFallback.svg";

function PreviewImage({
  src,
  altText,
  title,
  fallback,
  children,
  loader,
  showLoader,
  className,
}: any) {
  const image = useImage({
    srcList: src,
    useSuspense: false,
  });

  const imageIsLoading = image.isLoading && !image.error;
  const imageHasSucceeded = !image.isLoading && !image.error;
  const imageHasFailed = image.error && !image.isLoading;

  const commonAbsoluteLayoutClasses = "absolute top-0 w-full h-full";
  const classNames = cx(
    "gui-preview-image",
    {
      "gui-preview-image-succeeded": imageHasSucceeded,
      "gui-preview-image-failed": imageHasFailed,
      "gui-preview-image-show-loader": showLoader,
    },
    className
  );
  const previewClassNames = cx(
    "gui-preview-image-img",
    `${commonAbsoluteLayoutClasses}`
  );

  return (
    <div className={classNames}>
      <div className={commonAbsoluteLayoutClasses}>
        <img
          src={image.src}
          alt={altText}
          title={title}
          className="invisible"
        />

        <div
          title={title}
          className={previewClassNames}
          style={{ backgroundImage: `url("${image.src}")` }}
          aria-hidden="true"
        />

        <div
          className={`${commonAbsoluteLayoutClasses} flex items-center justify-center`}
        >
          {(imageIsLoading || showLoader) && loader}
          {imageHasFailed && fallback}
        </div>

        {children}
      </div>
    </div>
  );
}

PreviewImage.defaultProps = {
  showLoader: false,
  fallback: (
    <div className="gui-preview-image-fallback w-full h-full">
      <PreviewFallback />
    </div>
  ),
  loader: <Loader size="md" />,
};

export { PreviewImage };
