import React, { useState, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import faker from 'faker';
import { Tabs } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

// eslint-disable-next-line react/prop-types
function NewTabButton({ className, style }) {
  return (
    <div
      className={`self-center border-neutral-90 border border-solid px-2 font-medium hover:bg-neutral-90 break-all h-10 flex items-center justify-center bg-white text-blue-primary cursor-pointer ${className}`}
      style={style}
    >
      + New Tab
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function StretchTabsWithButtonAtStart({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative">
      <Tabs
        className="flex flex-wrap w-full relative"
        style={{
          'max-height': '120px',
          'overflow-y': tabs.length + 1 > 24 ? 'scroll' : 'hidden'
        }}
      >
        {tabs.map((t, index) => (
          <Tabs.Item isActive={activeTab === index}>
            {(className, ref) => (
              <div
                className={`no-underline text-center flex-grow ${className}`}
                style={{
                  'white-space': 'nowrap',
                  overflow: 'hidden',
                  'text-overflow': 'ellipsis',
                  'flex-basis': 0,
                  'min-width': tabs.length >= 8 ? '12.5%' : 0,
                  'max-width': tabs.length >= 8 ? '12.5%' : 'initial',
                  cursor: 'pointer'
                }}
                ref={ref}
                onClick={() => setActiveTab(index)}
              >
                {t.name}
              </div>
            )}
          </Tabs.Item>
        ))}
      </Tabs>
      <NewTabButton
        className="ml-auto absolute rounded-b border-t-0"
        style={{
          right: '16px'
        }}
      />
    </div>
  );
}

storiesOf('Components', module).add('Tabs', () => {
  const tabsNumber = number('Total number of tabs', 16);
  const tabs = [...Array(tabsNumber).keys()].map(() => ({
    name: faker.commerce.productName()
  }));

  return <StretchTabsWithButtonAtStart tabs={tabs} />;
});
