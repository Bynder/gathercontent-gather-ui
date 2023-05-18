import React from 'react';
import { node, string } from 'prop-types';

const ButtonLink = React.forwardRef(function ButtonLink(
  { children, className, ...rest },
  ref
) {
  return (
    <button
      type="button"
      className={`${className} bg-transparent border-0 hover:underline focus:outline-none rounded`}
      {...rest}
      ref={ref}
    >
      {children}
    </button>
  );
});

ButtonLink.propTypes = {
  children: node.isRequired,
  className: string
};

ButtonLink.defaultProps = {
  className: ''
};

export { ButtonLink };
