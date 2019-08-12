import React, { useState, useCallback, useEffect } from 'react';

const WindowingDOMWrapper = ({ children, ...rest }) => {
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

export { WindowingDOMWrapper };
