import React from 'react';
import { func, string } from 'prop-types';
import cx from 'classnames';
import { ButtonIconContained } from 'lib';

function Control({ onClick, iconName, children, className, ...buttonProps }) {
  const classNames = cx('control flex mr-2', className);

  return (
    <div className={classNames}>
      {children || (
        <ButtonIconContained
          name={iconName}
          onClick={onClick}
          size="sm"
          {...buttonProps}
        />
      )}
    </div>
  );
}

Control.propTypes = {
  onClick: func.isRequired,
  iconName: string.isRequired
};

export { Control };
