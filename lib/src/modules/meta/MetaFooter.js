import React from 'react';
import { node } from 'prop-types';
import { createComponentClassNames } from 'helpers/createComponentClassNames';

function MetaFooter({ children, ...props }) {
  const classNames = createComponentClassNames(
    'meta-footer flex items-center text-sm',
    props
  );

  return <div className={classNames}>{children}</div>;
}

MetaFooter.propTypes = {
  children: node.isRequired
};

export { MetaFooter };
