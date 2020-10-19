import React from 'react';
import { bool, node } from "prop-types";
import { createClassNames } from "helpers/createClassNames";
import { Control } from "./Control";

function Controls({ children, animateFromTop, ...props }) {
  const classNames = createClassNames('controls relative flex', props, {
    '-mt-10 group-hover:mt-0 transition-mt duration-200': animateFromTop,
  });

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

Controls.Control = Control;

Controls.propTypes = {
  children: node.isRequired,
  animateFromTop: bool,
};

Controls.defaultProps = {
  animateFromTop: true,
}

export { Controls };
