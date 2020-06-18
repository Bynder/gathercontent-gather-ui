import React from 'react';
import { func, number } from 'prop-types';
import cx from 'classnames';

const TabsRowContext = React.createContext({});

function TabsRow({ children, colCount }) {
  const borderClasses =
    'border border-solid border-neutral-90 border-t-0 first:border-t';
  const classNames = cx(
    `tw grid grid-cols-${colCount} bg-neutral-95 h-10 ${borderClasses}`
  );

  const sharedState = {
    colCount
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
