import React from 'react';
import { node } from 'prop-types';
import { createClassNames } from 'helpers/createClassNames';

function MetaHeading({ children, ...props }) {
  const classNames = createClassNames(
    'meta-heading text-base text-neutral-20 font-semi-bold mb-1',
    props
  );

  return <div className={classNames}>{children}</div>;
}

MetaHeading.propTypes = {
  children: node.isRequired
};

export { MetaHeading };
