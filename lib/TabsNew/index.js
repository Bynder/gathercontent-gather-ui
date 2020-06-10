import React, { useState, Fragment } from 'react';
import { node, string, number } from 'prop-types';
import { TabsBase } from './TabsBase';
import { TabsActionGroup } from './TabsActionGroup';
import { TabsGroup } from './TabsGroup';
import { TabsScrollShadow } from './TabsScrollShadow';
import { TabsDragLine } from './TabsDragLine';

function Tabs({ children, className, tabsLength }) {
  const [scrollPosition, setScrollPosition] = useState('top');

  return (
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
          <TabsScrollShadow scrollPosition={scrollPosition} />
        ))}
    </div>
  );
}

Tabs.Base = TabsBase;
Tabs.ActionGroup = TabsActionGroup;
Tabs.Group = TabsGroup;
Tabs.DragLine = TabsDragLine;

export { Tabs };

Tabs.propTypes = {
  children: node.isRequired,
  tabsLength: number.isRequired,
  className: string
};

Tabs.defaultProps = {
  className: ''
};
