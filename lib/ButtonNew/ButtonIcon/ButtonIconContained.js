import React from 'react';
import { ButtonIcon } from 'lib';

function ButtonIconContained(props) {
  const classNames = `button-icon-contained ${props.className}`;

  return <ButtonIcon className={classNames} {...props} />;
}

export { ButtonIconContained };
