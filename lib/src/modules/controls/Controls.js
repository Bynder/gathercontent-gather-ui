import React from 'react';
import { bool } from 'prop-types';
import cx from 'classnames';
import { Control } from './Control';

function Controls({ children, animateFromTop, className }) {
  const classNames = cx('controls relative flex', className, {
    '-mt-10 group-hover:mt-0 transition-mt duration-200': animateFromTop
  });

  return <div className={classNames}>{children}</div>;
}

Controls.Control = Control;

Controls.propTypes = {
  animateFromTop: bool
};

Controls.defaultProps = {
  animateFromTop: false
};

export { Controls };
