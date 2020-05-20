import React from 'react';
import { node, string } from 'prop-types';

function ButtonLink({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={`${className} border-0 hover:underline focus:outline-none focus:shadow-blue-focus-sm rounded text-blue-primary`}
      {...rest}
    >
      {children}
    </button>
  );
}

ButtonLink.propTypes = {
  children: node.isRequired,
  className: string
};

ButtonLink.defaultProps = {
  className: ''
};

export { ButtonLink };
