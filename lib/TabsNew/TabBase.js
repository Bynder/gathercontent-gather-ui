import { func } from 'prop-types';
import cx from 'classnames';
import React, { useContext, useState } from 'react';
import { TabsContext } from './index';

const TabContext = React.createContext({});

function TabBase({ children, id, index }) {
  const { tabsLength, activeTabId } = useContext(TabsContext);
  const [actionsAreActive, setActionsAreActive] = useState(false);

  const isActive = id === activeTabId;
  const location = index + 1;
  const endOfFullRow = location % 8 === 0;
  const oneRowOnly = tabsLength < 8;
  const lastTab = location === tabsLength;

  const borderClasses = cx(
    'border border-solid border-neutral-90 border-t-0 border-b-0 border-l-0',
    {
      'border-r-0': endOfFullRow || (oneRowOnly && lastTab),
    }
  );

  const wrapperClasses = cx(`relative group ${borderClasses}`, {
    'bg-neutral-95 hover:bg-neutral-90': !isActive,
    'bg-white': isActive
  });

  const buttonClasses = cx(
    'outline-none border-0 font-semi-bold h-full bg-transparent w-full px-2',
    {
      'text-blue-primary': isActive,
      'text-neutral-primary': !isActive
    }
  );

  const sharedState = {
    isActive,
    actionsAreActive,
    setActionsAreActive
  };

  return (
    <TabContext.Provider value={sharedState}>
      {children(wrapperClasses, buttonClasses)}
    </TabContext.Provider>
  );
}

TabBase.propTypes = {
  children: func.isRequired
};

TabBase.defaultProps = {
  isActive: false
};

export { TabBase, TabContext };
