import React, { useState } from 'react';
import { node, string, number } from 'prop-types';
import { Tab } from './Tab';
import { TabsActionGroup } from './TabsActionGroup';
import { TabsGroup } from './TabsGroup';
import { TabsScrollShadow } from './TabsScrollShadow';
import { TabDragLine } from './TabDragLine';
import { TabName } from './TabName';
import { TabAside } from './TabAside';
import { TabOptions } from './TabOptions';
import { TabsRow } from './TabsRow';

const TabsContext = React.createContext({});

function Tabs({ children, className, tabsLength, activeTabId }) {
  const [scrollPosition, setScrollPosition] = useState('top');

  const sharedState = {
    activeTabId
  };

  return (
    <TabsContext.Provider value={sharedState}>
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
            <>
              <TabsScrollShadow scrollPosition="top" />
              <TabsScrollShadow scrollPosition="bottom" />
            </>
          ) : (
            <TabsScrollShadow scrollPosition={scrollPosition} />
          ))}
      </div>
    </TabsContext.Provider>
  );
}

Tabs.ActionGroup = TabsActionGroup;
Tabs.Group = TabsGroup;
Tabs.Row = TabsRow;
Tabs.Tab = Tab;
Tabs.TabDragLine = TabDragLine;
Tabs.TabName = TabName;
Tabs.TabAside = TabAside;
Tabs.TabOptions = TabOptions;

Tabs.propTypes = {
  tabsLength: number.isRequired,
  activeTabId: string.isRequired,
  children: node.isRequired,
  className: string
};

Tabs.defaultProps = {
  className: ''
};

export { Tabs, TabsContext };
