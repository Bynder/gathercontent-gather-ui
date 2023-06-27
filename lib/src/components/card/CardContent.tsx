import React from 'react';
import cx from 'classnames';

function CardContent({ children, className }) {
  const classNames = cx('card-content', className);

  return <div className={classNames}>{children}</div>;
}

export { CardContent };
