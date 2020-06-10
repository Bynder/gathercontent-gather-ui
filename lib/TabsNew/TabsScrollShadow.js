import React from 'react';
import { oneOf } from 'prop-types';
import cx from 'classnames';
import { useSpring, animated } from 'react-spring';

export function TabsScrollShadow({ scrollPosition }) {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const className = cx('absolute w-full h-4 -mr-4 ', {
    'top-0 shadow-top-inset': scrollPosition === 'bottom',
    'bottom-0 shadow-bottom-inset': scrollPosition === 'top'
  });

  return <animated.span style={props} className={className} />;
}

TabsScrollShadow.propTypes = {
  scrollPosition: oneOf(['left', 'right']).isRequired
};
