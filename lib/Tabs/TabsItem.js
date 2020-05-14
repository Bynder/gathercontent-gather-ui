import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { GATHER_UI_TABS } from './consts';
import TabOptions from './TabsOptions';

const TabItem = ({ children, id, options, className }, context) => {
  const { activeTabId, setActiveTab } = context[GATHER_UI_TABS];
  const tabIsActive = activeTabId === id;
  const classNames = cx(
    'tabs__item px-2 py-1',
    {
      'is-active': tabIsActive,
      'py-1 px-4': options && !tabIsActive,
      'py-1 px-2': options && tabIsActive
    },
    className
  );

  if (typeof children === 'function') {
    return children(classNames, tabIsActive);
  }

  return (
    <span
      className={classNames}
      onKeyPress={() => setActiveTab(id)}
      onClick={() => setActiveTab(id)}
      role="button"
      tabIndex={-1}
    >
      {children}
      {tabIsActive && options && <TabOptions options={options} />}
    </span>
  );
};

TabItem.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      action: PropTypes.func.isRequired
    })
  ),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.func
  ]).isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string
};

TabItem.defaultProps = {
  options: null,
  className: ''
};

TabItem.contextTypes = {
  GATHER_UI_TABS: PropTypes.shape({}).isRequired
};

export default TabItem;
