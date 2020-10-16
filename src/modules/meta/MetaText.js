import React from 'react';
import { node } from "prop-types";
import { useClassNames } from "../../hooks/useClassNames";

function MetaText({ children, ...props }) {
  const classNames = useClassNames('meta-text text-neutral-base text-sm mb-2', props);

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
