import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Tabs, { GATHER_UI_TABS } from './index';

const TabItem = ({ children, id, options }, context) => {
  const { activeTabId, setActiveTab } = context[GATHER_UI_TABS];
  const tabIsActive = activeTabId === id;
  const classNames = cx('tabs__item', {
    'is-active': tabIsActive,
    'has-options': options
  });

  return (
    <span
      className={classNames}
      onKeyPress={() => setActiveTab(id)}
      onClick={() => setActiveTab(id)}
      role="button"
      tabIndex={-1}
    >
      {children}
      {tabIsActive && options && <Tabs.Options options={options} />}
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  id: PropTypes.string.isRequired
};

TabItem.defaultProps = {
  options: null
};

TabItem.contextTypes = {
  GATHER_UI_TABS: PropTypes.shape({}).isRequired
};

export default TabItem;
