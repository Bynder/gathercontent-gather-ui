import React, { useContext } from 'react';
import { func, number } from 'prop-types';
import cx from 'classnames';
import { TabsContext } from './index';

const TabsRowContext = React.createContext({});

function TabsRow({ children, colCount }) {
  const { tabsLength } = useContext(TabsContext);
  const cssGridColCount = Math.min(colCount, tabsLength);

  const borderClasses =
    'border border-solid border-neutral-90 border-t-0 first:border-t';
  const classNames = cx(
    `tab-row tw grid grid-cols-${cssGridColCount} bg-neutral-95 h-10 ${borderClasses}`
  );

  const sharedState = {
    colCount: cssGridColCount
  };

  return (
    <TabsRowContext.Provider value={sharedState}>
      <div className={classNames}>{children}</div>
    </TabsRowContext.Provider>
  );
}

TabsRow.propTypes = {
  children: func.isRequired,
  colCount: number
};

TabsRow.defaultProps = {
  colCount: 8
};

export { TabsRow, TabsRowContext };
