import React from 'react';
import { node, string } from 'prop-types';

function ButtonStoryItem({ children, title }) {
  return (
    <div className="flex flex-col items-center mx-2">
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
