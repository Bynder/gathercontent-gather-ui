import React from 'react';
import { ButtonIcon } from 'lib';
import { createClassNames } from 'helpers/createClassNames';
import { buttonIconDefaultProps } from '../common';

function ButtonIconContained(props) {
  const classNames = createClassNames('button-icon-contained', props);

  return <ButtonIcon className={classNames} contained {...props} />;
}

ButtonIconContained.propTypes = buttonIconDefaultProps;

export { ButtonIconContained };
