import React from 'react';
import PropTypes from 'prop-types';

function DropdownSection({
  children
}: any) {
  return <div className="dropdown__section">{children}</div>;
}

DropdownSection.propTypes = {
  children: PropTypes.node.isRequired
};

export default DropdownSection;
