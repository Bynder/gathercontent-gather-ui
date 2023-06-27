import React, { useContext } from 'react';
import { node } from 'prop-types';
import cx from 'classnames';
import { TabContext } from './Tab';

function TabAside({
  children
}: any) {
  const { isActive, isEditing, actionsAreActive } = useContext(TabContext);

  const asideClassNames = cx(
    'tab-aside absolute right-0 top-0 bottom-0 flex items-center justify-end pointer-events-none z-10',
    {
      'bg-blur-white-right': isActive,
      'bg-blur-grey-95-right group-hover:bg-blur-grey-90-right': !isActive,
      'w-10 group-hover:w-16': children && !isActive,
      'w-16 pr-2': children && isActive,
      'w-10': !children,
      'z-20': actionsAreActive
    }
  );

  const innerClassNames = cx('flex items-center pointer-events-auto', {
    'mr-2': children && !isActive,
    'absolute -mt-32': isEditing
  });

  return (
    <div className={asideClassNames}>
      <div className={innerClassNames}>{children}</div>
    </div>
  );
}

TabAside.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: node
};

export { TabAside };
