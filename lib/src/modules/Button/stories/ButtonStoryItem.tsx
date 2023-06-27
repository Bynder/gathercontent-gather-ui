import React from 'react';
import { node, string } from 'prop-types';

function ButtonStoryItem({
  children,
  title,
  className
}: any) {
  return (
    <div className={`flex flex-col items-center px-2 ${className}`}>
      <h4>{title}</h4>
      <div>{children}</div>
    </div>
  );
}

ButtonStoryItem.propTypes = {
  children: node.isRequired,
  title: string.isRequired
};
export { ButtonStoryItem };
