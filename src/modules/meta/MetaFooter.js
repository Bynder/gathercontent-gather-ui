import React from 'react';
import { node } from "prop-types";
import { useClassNames } from "../../hooks/useClassNames";

function MetaFooter({ children, ...props }) {
  const classNames = useClassNames('meta-footer flex items-center text-sm', props);

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
