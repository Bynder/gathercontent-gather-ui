import React from 'react';
import { node, string } from 'prop-types';
import { useImage } from 'react-image';
import cx from 'classnames';
import { Loader } from 'modules/loader/Loader';
import previewFallback from 'assets/previewFallback.svg';

function PreviewImage({
  src,
  altText,
  title,
  fallback,
  children,
  loader,
  ...props
}) {
  const image = useImage({
    srcList: src,
    useSuspense: false
  });

  const imageIsLoading = image.isLoading && !image.error;
  const imageHasSucceeded = !image.isLoading && !image.error;
  const imageHasFailed = image.error && !image.isLoading;

  const commonAbsoluteLayoutClasses = 'absolute top-0 w-full h-full';
  const classNames = `preview-image relative flex overflow-hidden w-full h-full pb-100% ${
    props.className
  }`;
  const previewClassNames = cx(
    `${commonAbsoluteLayoutClasses} bg-cover bg-center pb-100% transition-opacity duration-300 opacity-0`,
    {
      'opacity-100': imageHasSucceeded
    }
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
          {imageIsLoading && loader}
          {imageHasFailed && fallback}
        </div>

        <div className="thumb-children absolute top-0 m-2">{children}</div>
      </div>
    </div>
  );
}

PreviewImage.propTypes = {
  fallback: node,
  loader: node,
  src: string.isRequired,
  altText: string.isRequired,
  title: string.isRequired
};

PreviewImage.defaultProps = {
  fallback: <div className="w-full h-full p-05">{previewFallback()}</div>,
  loader: <Loader />
};

export { PreviewImage };
