import React, { useContext } from "react";
import cx from "classnames";
import { TabsContext } from "./index";

const TabsRowContext = React.createContext({});

function TabsRow({ children, colCount }: any) {
  const { tabsLength }: any = useContext(TabsContext);
  const cssGridColCount = Math.min(colCount, tabsLength);

  const borderClasses =
    "border border-solid border-neutral-90 border-t-0 first:border-t";
  const classNames = cx(`tab-row tw grid bg-neutral-95 h-10 ${borderClasses}`);

  const sharedState = {
    colCount: cssGridColCount,
  };

  return (
    <TabsRowContext.Provider value={sharedState}>
      <div
        className={classNames}
        style={{
          gridTemplateColumns: `repeat(${cssGridColCount}, minmax(0, 1fr))`,
        }}
      >
        {children}
      </div>
    </TabsRowContext.Provider>
  );
}

TabsRow.defaultProps = {
  colCount: 8,
};

export { TabsRow, TabsRowContext };
