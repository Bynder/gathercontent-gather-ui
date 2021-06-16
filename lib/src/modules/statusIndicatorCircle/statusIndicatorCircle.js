import React from 'react';
import cx from 'classnames';
import Icon from '../../../Icon';

export function StatusIndicatorCircle({ color, icon, solid, thickBorder }) {
  const className = cx('status-indicator-circle', {
    'duration-100': thickBorder,
    'duration-300': !thickBorder
  });
  const boxShadow = `inset 0px 0px 0px ${thickBorder ? '4' : '2'}px ${color}`;

  const addedStyles = {
    backgroundColor: solid ? color : 'transparent',
    boxShadow
  };

  return (
    <span style={addedStyles} className={className}>
      {icon && solid ? (
        <Icon name={icon} types={['white']} defaultActiveColor={false} />
      ) : null}
    </span>
  );
}
