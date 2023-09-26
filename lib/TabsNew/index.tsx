import React, { useState } from "react";
import { Tab, TabContext } from "./Tab";
import { TabsActionGroup } from "./TabsActionGroup";
import { TabsGroup } from "./TabsGroup";
import { TabsScrollShadow } from "./TabsScrollShadow";
import { TabDragLine } from "./TabDragLine";
import { TabName } from "./TabName";
import { TabAside } from "./TabAside";
import { TabOptions } from "./TabOptions";
import { TabsRow } from "./TabsRow";
import { TabNameForm } from "./TabNameForm";

const TabsContext = React.createContext({});

function Tabs({ children, className, tabsLength, activeTabId }: any) {
  const [scrollPosition, setScrollPosition] = useState("top");

  const sharedState = {
    activeTabId,
    tabsLength,
  };

  return (
    <TabsContext.Provider value={sharedState}>
      <div
        onScroll={(e) => {
          const element = e.target;

          // @ts-expect-error TS(2339): Property 'scrollTop' does not exist on type 'Event... Remove this comment to see the full error message
          if (element.scrollTop === 0) {
            if (scrollPosition !== "top") {
              setScrollPosition("top");
            }
          } else if (
            // @ts-expect-error TS(2339): Property 'scrollHeight' does not exist on type 'Ev... Remove this comment to see the full error message
            element.scrollHeight - element.scrollTop ===
            // @ts-expect-error TS(2339): Property 'clientHeight' does not exist on type 'Ev... Remove this comment to see the full error message
            element.clientHeight
          ) {
            if (scrollPosition !== "bottom") {
              setScrollPosition("bottom");
            }
          } else if (scrollPosition !== "middle") {
            setScrollPosition("middle");
          }
        }}
        className={`tabs-new relative ${className} ${scrollPosition}`}
      >
        {children}
        {tabsLength > 24 && (
          <TabsScrollShadow scrollPosition={scrollPosition} />
        )}
      </div>
    </TabsContext.Provider>
  );
}

Tabs.ActionGroup = TabsActionGroup;
Tabs.Group = TabsGroup;
Tabs.Row = TabsRow;
Tabs.Tab = Tab;
// @ts-expect-error TS(2339): Property 'Context' does not exist on type 'typeof ... Remove this comment to see the full error message
Tabs.Tab.Context = TabContext;
Tabs.TabDragLine = TabDragLine;
Tabs.TabName = TabName;
Tabs.TabNameForm = TabNameForm;
Tabs.TabAside = TabAside;
Tabs.TabOptions = TabOptions;

Tabs.defaultProps = {
  className: "",
};

export { Tabs, TabsContext };
