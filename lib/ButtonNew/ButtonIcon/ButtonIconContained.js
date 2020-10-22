import React from 'react';
import { ButtonIcon } from 'lib';
import { createComponentClassNames } from 'helpers/createComponentClassNames';
import { buttonIconDefaultProps } from '../common';

function ButtonIconContained(props) {
  const classNames = createComponentClassNames('button-icon-contained', props);

  return <ButtonIcon className={classNames} contained {...props} />;
}

ButtonIconContained.propTypes = buttonIconDefaultProps;

export { ButtonIconContained };
