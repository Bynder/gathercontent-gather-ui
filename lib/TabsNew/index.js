import React, { useState, Fragment } from 'react';
import { node, string, arrayOf, shape } from "prop-types";
import { TabBase } from './TabBase';
import { TabsActionGroup } from './TabsActionGroup';
import { TabsGroup } from './TabsGroup';
import { TabsScrollShadow } from './TabsScrollShadow';
import { TabDragLine } from './TabDragLine';
import { TabName } from './TabName';
import { TabAside } from './TabAside';
import { TabOptions } from './TabOptions';
import { TabsRow } from "./TabsRow";

const TabsContext = React.createContext({});

function Tabs({ children, className, tabs, activeTabId }) {
  const [scrollPosition, setScrollPosition] = useState('top');

  const tabsLength = tabs.length;
  const contextValue = {
    tabs,
    activeTabId,
    tabsLength
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        onScroll={e => {
          const element = e.target;

          if (element.scrollTop === 0) {
            if (scrollPosition !== 'top') {
              setScrollPosition('top');
            }
          } else if (
            element.scrollHeight - element.scrollTop ===
            element.clientHeight
          ) {
            if (scrollPosition !== 'bottom') {
              setScrollPosition('bottom');
            }
          } else if (scrollPosition !== 'middle') {
            setScrollPosition('middle');
          }
        }}
        className={`relative ${className} ${scrollPosition}`}
      >
        {children}
        {tabsLength > 24 &&
          (scrollPosition === 'middle' ? (
            <Fragment>
              <TabsScrollShadow scrollPosition="top" />
              <TabsScrollShadow scrollPosition="bottom" />
            </Fragment>
          ) : (
            <div />
          ))}
      </div>
    </TabsContext.Provider>
  );
}

Tabs.ActionGroup = TabsActionGroup;
Tabs.Group = TabsGroup;
Tabs.Row = TabsRow;
Tabs.TabBase = TabBase;
Tabs.TabDragLine = TabDragLine;
Tabs.TabName = TabName;
Tabs.TabAside = TabAside;
Tabs.TabOptions = TabOptions;

Tabs.propTypes = {
  tabs: arrayOf(shape({})).isRequired,
  activeTabId: string.isRequired,
  children: node.isRequired,
  className: string,
};

Tabs.defaultProps = {
  className: ''
};

export { Tabs, TabsContext };
