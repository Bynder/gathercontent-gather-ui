import React, { useContext } from 'react';
import { func } from 'prop-types';
import cx from 'classnames';
import { TabsContext } from './index';

function TabsRow({ children }) {
  const { tabsLength } = useContext(TabsContext);

  const colsPerRow = tabsLength >= 8 ? 8 : tabsLength;
  const borderClasses =
    'border border-solid border-neutral-90 border-t-0 first:border-t';
  const classNames = cx(
    `tw grid grid-cols-${colsPerRow} bg-neutral-95 h-10 ${borderClasses}`
  );

  return <div className={classNames}>{children}</div>;
}

TabsRow.propTypes = {
  children: func.isRequired
};

export { TabsRow };
