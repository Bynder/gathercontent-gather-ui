import React from 'react';
import { string } from 'prop-types';
import Icon from 'lib/Icon';

function Loader({ heading, progress, className }) {
  const classNames = `loader ${className}`;

  return (
    <div className={classNames}>
      {heading && <div className="loader-heading mb-2">{heading}</div>}

      <div className="loader-spinner flex items-center justify-center w-full">
        <Icon name="loader" />

        <div className="loader-progress">{progress}</div>
      </div>
    </div>
  );
}

Loader.propTypes = {
  heading: string,
  progress: string
};

Loader.defaultProps = {
  heading: null,
  progress: null
};

export { Loader };
