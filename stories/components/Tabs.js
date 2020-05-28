import React, { useState } from 'react';
import cx from 'classnames';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import faker from 'faker';
import { ButtonSecondary, Tabs } from '../../lib';
import Icon from '../../lib/Icon';

// eslint-disable-next-line react/prop-types
function TabsStory({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Tabs
      actions={
        <ButtonSecondary
          className="rounded-b border-t-0 rounded-t-none"
          onClick={() => {}}
        >
          + New Tab
        </ButtonSecondary>
      }
      tabs={tabs}
      className="bg-neutral-95 border-neutral-90 border-t border-b-0 border-l-0 border-r border-solid"
    >
      {tabs.map((t, index) => (
        <Tabs.Base tabsLength={tabs.length}>
          {(className, style) => (
            <button
              type="button"
              className={`relative border-neutral-90 border border-solid font-medium hover:bg-neutral-90 break-all h-10 items-center border-t-0 border-r-0 px-2 font-semi-bold ${className} ${
                activeTab === index
                  ? 'bg-white text-blue-primary'
                  : 'bg-neutral-95 text-neutral-primary'
              }`}
              onClick={e => {
                e.preventDefault();
                setActiveTab(index);
              }}
              style={style}
            >
              <div className="group overflow-hidden w-full relative overflow-hidden whitespace-no-wrap">
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
            </button>
          )}
        </Tabs.Base>
      ))}
    </Tabs>
  );
}

storiesOf('Components', module).add('Tabs', () => {
  const tabsNumber = number('Total number of tabs', 16);
  const tabs = [...Array(tabsNumber).keys()].map(() => ({
    name: faker.commerce.productName()
  }));

  return <TabsStory tabs={tabs} />;
});
