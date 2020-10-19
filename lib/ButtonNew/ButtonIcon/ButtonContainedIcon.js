import React, { useState } from 'react';
import { ButtonIcon } from 'lib';
import { createClassNames } from 'helpers/createClassNames';
import { buttonIconDefaultProps } from '../common';

function ButtonContainedIcon(props) {
  const [active, setActive] = useState(props.active);
  const classNames = createClassNames('button-contained-icon', props, [
    'border border-solid border-neutral-90 bg-white',
    'hover:bg-blue-90 hover:border-blue-primary'
  ]);

  return (
    <ButtonIcon
      onMouseOver={() => setActive(true)}
      onFocus={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onBlur={() => setActive(false)}
      className={classNames}
      contained
      {...props}
      active={active}
    />
  );
}

ButtonContainedIcon.propTypes = buttonIconDefaultProps;

export { ButtonContainedIcon };
