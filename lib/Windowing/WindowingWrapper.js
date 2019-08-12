import React, { useState, useCallback } from 'react';
import { func } from 'prop-types';

const WindowingWrapper = ({ children, ...rest }) => {
  const [scrollTop, setScrollTop] = useState(null);
  const [height, setHeight] = useState(null);

  const ref = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
      setScrollTop(node.scrollTop);

      node.addEventListener('scroll', () => {
        setScrollTop(node.scrollTop);
      });
      node.addEventListener('resize', () => {
        setScrollTop(node.scrollTop);
      });
    }
  }, []);

  return (
    <div ref={ref} {...rest}>
      {children(height, scrollTop)}
    </div>
  );
};

WindowingWrapper.propTypes = {
  children: func.isRequired
};

export { WindowingWrapper };
