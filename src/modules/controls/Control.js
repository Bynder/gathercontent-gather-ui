import React from 'react';
import { func, string } from "prop-types";
import { createClassNames } from "helpers/createClassNames";
import { ButtonIcon } from "lib";

function Control({ onClick, iconName, children, ...props }) {
  const classNames = createClassNames('control flex mr-2', props);

  return (
    <div className={classNames}>
      {children || (
        <ButtonIcon name={iconName} onClick={onClick} size="sm" className="bg-white rounded-small" />
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
