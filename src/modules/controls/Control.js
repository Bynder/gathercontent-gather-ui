import React from 'react';
import { func, string } from "prop-types";
import { ButtonContainedIcon } from "lib";
import { createClassNames } from "helpers/createClassNames";

function Control({ onClick, iconName, children, ...props }) {
  const classNames = createClassNames('control flex mr-2', props);

  return (
    <div className={classNames}>
      {children || (
        <ButtonContainedIcon name={iconName} onClick={onClick} size="sm" contained />
      )}
    </div>
  )
}

Control.propTypes = {
  children: func,
  onClick: func.isRequired,
  iconName: string.isRequired,
};

Control.defaultProps = {
  children: null,
};

export { Control };
