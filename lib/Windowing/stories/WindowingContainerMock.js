import React, { useCallback } from 'react';

const WindowingContainerMock = ({ children, ...rest }) => {
    const windowContainer = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);
  console.log(children)

    const getContainer = () => windowContainer
  return (
    <div ref={windowContainer}  {...rest}>
      {children(getContainer)}
    </div>
  );
};

export { WindowingContainerMock };
