import React, { useContext } from 'react';
import cx from 'classnames';
import { TabContext } from './TabBase';

function TabAside({ children }) {
  const { isActive, actionsAreActive } = useContext(TabContext);

  const asideClassNames = cx(
    'flex items-center absolute mr-2 right-0 top-0 bottom-0 w-10 pointer-events-none',
    {
      'justify-start': isActive || actionsAreActive,
      'justify-end group-hover:justify-start': !isActive && !actionsAreActive
    }
  );

  const textFadeClassNames = cx('w-4 h-full', {
    'bg-blur-white-right': isActive,
    'bg-blur-grey-95-right group-hover:bg-blur-grey-90-right': !isActive
  });

  return (
    <div className={asideClassNames}>
      <span className={textFadeClassNames} />
      <div className="flex items-center pointer-events-auto">{children}</div>
    </div>
  );
}

export { TabAside };
