import React from 'react';
import { node } from "prop-types";
import { createClassNames } from "helpers/createClassNames";

function MetaText({ children, ...props }) {
  const classNames = createClassNames('meta-text text-neutral-base text-sm mb-2', props);

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

MetaText.propTypes = {
  children: node.isRequired,
};

export { MetaText };
