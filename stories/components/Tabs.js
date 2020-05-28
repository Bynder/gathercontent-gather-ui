import React, { useState, Fragment } from 'react';
import cx from 'classnames';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import faker from 'faker';
import { ButtonSecondary, Tabs } from '../../lib';
import Icon from '../../lib/Icon';

// eslint-disable-next-line react/prop-types
function StretchTabsWithButtonAtStart({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  const tabsClassName = cx('flex flex-wrap w-full relative', {
    'overflow-y-hidden': tabs.length <= 24,
    'overflow-y-scroll': tabs.length > 24
  });

  return (
    <div className="relative">
      <Tabs
        className={tabsClassName}
        style={{
          'max-height': '120px'
        }}
      >
        {tabs.map((t, index) => (
          <Tabs.Item isActive={activeTab === index}>
            {(className, ref) => (
              <div
                className={`flex group no-underline justify-center text-center flex-grow cursor-pointer font-semi-bold relative ${className}`}
                style={{
                  'flex-basis': 0,
                  'min-width': tabs.length >= 8 ? '12.5%' : 0,
                  'max-width': tabs.length >= 8 ? '12.5%' : 'initial'
                }}
                ref={ref}
                onClick={() => setActiveTab(index)}
              >
                <div className="group overflow-hidden cursor-pointer w-full relative overflow-hidden whitespace-no-wrap">
                  {t.name}
                </div>
                <div className="flex items-center absolute right-0 top-0 bottom-0 w-8 pr-2">
                  <span
                    className={`w-full h-full group-hover:bg-blur-grey-90-right ${
                      activeTab === index
                        ? 'bg-blur-white-right'
                        : 'bg-blur-grey-95-right'
                    }`}
                  />
                  <Icon
                    className="group-hover:block group-hover:bg-neutral-90 hidden"
                    name="cog"
                  />
                </div>
              </div>
            )}
          </Tabs.Item>
        ))}
      </Tabs>
      <ButtonSecondary
        className="absolute rounded-b border-t-0 rounded-t-none right-0 mr-4"
        onClick={() => {}}
      >
        + New Tab
      </ButtonSecondary>
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
