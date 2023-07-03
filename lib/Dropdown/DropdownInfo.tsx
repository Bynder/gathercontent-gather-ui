import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

const DropdownInfo = ({
  children,
  borderTop,
  borderBottom
}: any) => {
  const classNames = cx(
    `dropdown__section p-4 text-sm border-solid border-neutral-90 bg-neutral-98 border-l-0 border-r-0 rounded-tl rounded-tr`,
    {
      'border-t': borderTop,
      'border-b': borderBottom,
      'border-t-0': !borderTop,
      'border-b-0': !borderBottom
    }
  );

  return <div className={classNames}>{children}</div>;
};

DropdownInfo.propTypes = {
  children: PropTypes.node.isRequired,
  borderTop: PropTypes.bool,
  borderBottom: PropTypes.bool
};

DropdownInfo.defaultProps = {
  borderTop: false,
  borderBottom: true
};

export default DropdownInfo;
