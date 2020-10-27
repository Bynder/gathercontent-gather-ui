import React from 'react';
import cx from 'classnames';

function CardControls({ children, className }) {
  const classNames = cx('card-controls', className);

  return <div className={classNames}>{children}</div>;
}

export { CardControls };
