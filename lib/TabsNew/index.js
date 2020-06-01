import React from 'react';
import { node, string } from 'prop-types';
import { TabsBase } from './TabsBase';
import { TabsActionGroup } from './TabsActionGroup';
import { TabsGroup } from './TabsGroup';

function Tabs({ children, className }) {
  return <div className={`relative ${className}`}>{children}</div>;
}

Tabs.Base = TabsBase;
Tabs.ActionGroup = TabsActionGroup;
Tabs.Group = TabsGroup;

export { Tabs };

Tabs.propTypes = {
  children: node.isRequired,
  className: string
};

Tabs.defaultProps = {
  className: ''
};
