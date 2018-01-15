import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { GATHER_UI_TABS } from './index';

const TabItem = ({ children, id }, context) => {
  const { activeTabId, setActiveTab } = context[GATHER_UI_TABS];
  const classNames = cx('tabs__item', {
    'is-active': activeTabId === id
  });

  return (
    <button className={classNames} onClick={() => setActiveTab(id)}>
      {children}
    </button>
  );
};

TabItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  id: PropTypes.string.isRequired
};

TabItem.contextTypes = {
  GATHER_UI_TABS: PropTypes.shape({}).isRequired
};

export default TabItem;
