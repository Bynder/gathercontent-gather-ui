import React from 'react';
import cx from 'classnames';
import { node, string, bool } from 'prop-types';

function DropdownHeader({
  children,
  className,
  collapse
}: any) {
  const classNames = cx(`dropdown__header ${className}`, {
    'dropdown__header--collapse': collapse
  });
  return <header className={classNames}>{children}</header>;
}

DropdownHeader.propTypes = {
  children: node.isRequired,
  className: string,
  collapse: bool
};

DropdownHeader.defaultProps = {
  className: '',
  collapse: false
};

export default DropdownHeader;
