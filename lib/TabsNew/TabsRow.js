import React, { useContext } from "react";
import { func } from 'prop-types';
import cx from 'classnames';
import { TabsContext } from "./index";

function TabsRow({ children, index }) {
  const { tabsLength } = useContext(TabsContext);

  const colsPerRow = tabsLength >= 8 ? 8 : tabsLength;
  const classNames = cx(`tw grid grid-cols-${colsPerRow} border border-solid border-neutral-90 h-10`, {
    'border-t-0': index > 0
  });

  return (
    <div className={classNames}>
      {children}
    </div>
  );
}

TabsRow.propTypes = {
  children: func.isRequired
};

export { TabsRow };
