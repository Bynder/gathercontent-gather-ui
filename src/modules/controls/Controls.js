import React from 'react';
import { node } from "prop-types";
import { createClassNames } from "helpers/createClassNames";
import { Control } from "./Control";

function Controls({ children, ...props }) {
  const classNames = createClassNames('controls relative flex -mt-10 group-hover:mt-0 transition-mt duration-200', props);

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

Controls.Control = Control;

Controls.propTypes = {
  children: node.isRequired,
};

export { Controls };
