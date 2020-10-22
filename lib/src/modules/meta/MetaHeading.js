import React from 'react';
import { node } from 'prop-types';
import { createComponentClassNames } from 'helpers/createComponentClassNames';

function MetaHeading({ children, ...props }) {
  const classNames = createComponentClassNames(
    'meta-heading text-base text-neutral-20 font-semi-bold mb-1 truncate',
    props
  );

  return <div className={classNames}>{children}</div>;
}

MetaHeading.propTypes = {
  children: node.isRequired
};

export { MetaHeading };
