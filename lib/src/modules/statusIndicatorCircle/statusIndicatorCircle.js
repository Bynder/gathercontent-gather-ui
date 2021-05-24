import React from 'react';
import cx from 'classnames';
import Icon from '../../../Icon';

export function StatusIndicatorCircle({ color, icon, solid, thickBorder }) {
  const className = cx('status-indicator-circle', {
    'thick-border': thickBorder,
    'thin-border': !thickBorder
  });

  const addedStyles = {
    backgroundColor: solid ? color : 'transparent',
    borderColor: color
  };

  return (
    <span style={addedStyles} className={className}>
      {icon && (
        <Icon name={icon} types={['white']} defaultActiveColor={false} />
      )}
    </span>
  );
}
