import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { v4 } from 'uuid';
import { number, select } from '@storybook/addon-knobs';
import faker from 'faker';
import { ButtonSecondary, Tabs } from 'lib';
import Dropdown from "../../lib/Dropdown";

// eslint-disable-next-line react/prop-types
function TabsStory({ tabs, dragSide, dragIndex }) {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);

  return (
    <Tabs tabs={tabs} activeTabId={activeTabId}>
      <Tabs.Group>
        {tabs.map((t, index) => (
          <Tabs.TabBase id={t.id} index={index}>
            {(wrapperClasses, buttonClasses) => (
              <div className={wrapperClasses}>
                <button
                  type="button"
                  className={buttonClasses}
                  onClick={e => {
                    e.preventDefault();
                    setActiveTabId(t.id);
                  }}
                  title={t.name}
                >
                  <Tabs.TabName>
                    {t.name}
                  </Tabs.TabName>
                </button>

                <Tabs.TabAside id={t.id}>
                  <Tabs.TabOptions id={t.id}>
                    <Dropdown.ActionGroup className="text-neutral-20 font-normal">
                      <Dropdown.Action
                        className="text-neutral-20 weight-roman"
                        action={() => {}}
                      >
                        Action text
                      </Dropdown.Action>
                    </Dropdown.ActionGroup>
                  </Tabs.TabOptions>
                </Tabs.TabAside>

                {dragSide && dragIndex === index && (
                  <Tabs.TabDragLine side={dragSide} />
                )}
              </div>
            )}
          </Tabs.TabBase>
        ))}
      </Tabs.Group>

      <Tabs.ActionGroup>
        <ButtonSecondary
          className="rounded-b border-t-0 rounded-t-none"
          onClick={() => {}}
        >
          + New Tab
        </ButtonSecondary>
      </Tabs.ActionGroup>
    </Tabs>
  );
}

storiesOf('Components', module).add('Tabs', () => {
  const tabsNumber = number('Total number of tabs', 10);
  const groupId = 'Drag And Drop';

  const label = 'Drag Line';
  const options = {
    None: null,
    Left: 'left',
    Right: 'right',
    Whole: 'whole'
  };

  const dragSide = select(label, options, 'none', groupId);
  const dragIndex = number('Index of tab being dropped onto', 0, {}, groupId);

  const tabs = [...Array(tabsNumber).keys()].map(() => ({
    id: v4(),
    name: faker.commerce.productName()
  }));

  return <TabsStory tabs={tabs} dragSide={dragSide} dragIndex={dragIndex} />;
});
