import React, { useEffect, useState } from "react";
import { node, string } from "prop-types";
import { useImage } from 'react-image'
import { useClassNames } from "src/hooks/useClassNames";
import Icon from "lib/Icon";
import bolt from "../../../assets/icons/bolt.svg";

function Thumb({ src, altText, title, fallback, children, ...props }) {
  const image = useImage({
    srcList: src,
    useSuspense: false,
  });

  const [minimumLoadingTimeSurpassed, setMinimumLoadingTimeSurpassed] = useState(true);
  useEffect(() => {
    setTimeout(() => setMinimumLoadingTimeSurpassed(true), 250);
  }, []);
  const imageIsLoading = minimumLoadingTimeSurpassed && image.isLoading && !image.error;
  const imageHasSucceeded = minimumLoadingTimeSurpassed && !image.isLoading && !image.error;
  const imageHasFailed = minimumLoadingTimeSurpassed && image.error && !image.isLoading;

  const commonAbsoluteLayoutClasses = 'absolute top-0 w-full h-full';
  const classNames = useClassNames(
    'thumb relative flex overflow-hidden w-full h-full pb-100%',
    props
  );
  const previewClassNames = useClassNames(
    `${commonAbsoluteLayoutClasses} bg-cover bg-center pb-100% transition-opacity duration-300 opacity-0`,
    {}, {
      'opacity-100': imageHasSucceeded,
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

        <div className={`${commonAbsoluteLayoutClasses} flex items-center justify-center`}>
          { imageIsLoading && (
            <Icon name="loader" />
          )}

          { imageHasFailed && fallback }
        </div>

        {children}
      </div>
    </div>
  );
}

Thumb.propTypes = {
  children: node,
  fallback: node,
  src: string.isRequired,
  altText: string.isRequired,
  title: string.isRequired,
};

Thumb.defaultProps = {
  children: null,
  fallback: (
    <Icon name="bolt" />
  ),
}

export { Thumb };
