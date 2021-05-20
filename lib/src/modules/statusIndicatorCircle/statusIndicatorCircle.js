import React from 'react';
import { useSpring, animated } from 'react-spring';
import * as easings from 'd3-ease';
import Icon from '../../../Icon';

export function StatusIndicatorCircle({ color, icon, solid, thickBorder }) {
  const styles = useSpring({
    borderWidth: thickBorder ? '4px' : '2px',
    config: {
      easing: easings.easeCubic,
      duration: 300
    }
  });

  const addedStyles = {
    ...styles,
    backgroundColor: solid ? color : 'transparent',
    borderColor: color,
    borderStyle: 'solid'
  };

  return (
    <animated.span style={addedStyles} className="status-indicator-circle">
      {icon && (
        <Icon name={icon} types={['white']} defaultActiveColor={false} />
      )}
    </animated.span>
  );
}
