import React, { useContext, useState, useRef } from 'react';
import { func, string, number } from 'prop-types';
import cx from 'classnames';
import { TabsContext } from './index';
import { TabsRowContext } from './TabsRow';

const TabContext = React.createContext({});

function Tab({
  children,
  id,
  index
}: any) {
  const { activeTabId } = useContext(TabsContext);
  const { colCount } = useContext(TabsRowContext);
  const [actionsAreActive, setActionsAreActive] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const formInputRef = useRef(null);

  const isActive = id === activeTabId;
  const location = index + 1;
  const endOfFullRow = location % colCount === 0;

  const borderClasses = cx(
    'border border-solid border-neutral-90 border-t-0 border-b-0 border-l-0',
    {
      'border-r-0': endOfFullRow
    }
  );

  const wrapperClasses = cx(
    `tab-wrapper flex relative group overflow-hidden ${borderClasses}`,
    {
      'bg-neutral-95 hover:bg-neutral-90': !isActive,
      'bg-white': isActive
    }
  );

  const tabClasses = cx(
    'tab flex items-center no-underline outline-none border-0 font-semi-bold h-full bg-transparent w-full px-2',
    {
      'text-blue-primary': isActive,
      'text-neutral-primary focus:bg-neutral-90': !isActive
    }
  );

  const sharedState = {
    id,
    isActive,
    actionsAreActive,
    setActionsAreActive,
    isEditing,
    setIsEditing,
    formInputRef
  };

  return (
    <TabContext.Provider value={sharedState}>
      {children(wrapperClasses, tabClasses)}
    </TabContext.Provider>
  );
}

Tab.propTypes = {
  children: func.isRequired,
  id: string.isRequired,
  index: number.isRequired
};

export { Tab, TabContext };
