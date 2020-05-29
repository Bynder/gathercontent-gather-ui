import React from 'react';
import { node, string, oneOfType, arrayOf, shape } from 'prop-types';
import cx from 'classnames';
import { TabsBase } from './TabsBase';

function Tabs({ children, className, actions, tabs }) {
  const tabsClassName = cx('flex flex-wrap w-full relative', {
    'overflow-y-hidden': tabs.length <= 24,
    'overflow-y-scroll': tabs.length > 24
  });

  return (
    <div className="relative">
      <nav className={`flex max-h-30 ${tabsClassName} ${className}`}>
        {children}
      </nav>
      {actions && <div className="absolute right-0 mr-4">{actions}</div>}
    </div>
  );
}

Tabs.Base = TabsBase;

export { Tabs };

Tabs.propTypes = {
  children: node.isRequired,
  className: string,
  actions: oneOfType([arrayOf(node), node]),
  tabs: arrayOf(shape({})).isRequired
};

Tabs.defaultProps = {
  className: '',
  actions: null
};
