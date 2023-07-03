import React from 'react';
import PropTypes from 'prop-types';

function DropdownFooter({
  children,
  ...rest
}: any) {
  return (
    <footer className="dropdown__footer" {...rest}>
      {children}
    </footer>
  );
}

DropdownFooter.propTypes = {
  children: PropTypes.node.isRequired
};

export default DropdownFooter;
