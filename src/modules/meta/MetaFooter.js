import React from 'react';
import { node } from "prop-types";
import { createClassNames } from "helpers/createClassNames";

function MetaFooter({ children, ...props }) {
  const classNames = createClassNames('meta-footer flex items-center text-sm', props);

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

MetaFooter.propTypes = {
  children: node.isRequired,
};

export { MetaFooter };
