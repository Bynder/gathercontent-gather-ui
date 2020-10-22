import React from 'react';
import { func, string } from 'prop-types';
import { ButtonIconContained } from 'lib';
import { createComponentClassNames } from 'helpers/createComponentClassNames';

function Control({ onClick, iconName, children, ...props }) {
  const classNames = createComponentClassNames('control flex mr-2', props);

  return (
    <div className={classNames}>
      {children || (
        <ButtonIconContained
          name={iconName}
          onClick={onClick}
          size="sm"
          contained
        />
      )}
    </div>
  );
}

Control.propTypes = {
  children: func,
  onClick: func.isRequired,
  iconName: string.isRequired
};

Control.defaultProps = {
  children: null
};

export { Control };
