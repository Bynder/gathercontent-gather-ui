import React from 'react';
import { node } from 'prop-types';
import { createComponentClassNames } from 'helpers/createComponentClassNames';

function MetaText({ children, ...props }) {
  const classNames = createComponentClassNames(
    'meta-text text-neutral-base text-sm mb-2',
    props
  );

  return <div className={classNames}>{children}</div>;
}

MetaText.propTypes = {
  children: node.isRequired
};

export { MetaText };
