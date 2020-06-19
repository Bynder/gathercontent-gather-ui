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
  const numberOfRows = Math.ceil(tabs.length / 8);
  const rows = [...new Array(numberOfRows)].map((i, index) => {
    const start = index * 8;
    return tabs.slice(start, start + 8);
  });

  return (
    <Tabs tabsLength={tabs.length} activeTabId={activeTabId}>
      <Tabs.Group>
        {rows.map((r) => (
          <Tabs.Row>
            {r.map((t, index) => (
              <Tabs.Tab id={t.id} index={index}>
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

                    <Tabs.TabAside>
                      <Tabs.TabOptions>
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
              </Tabs.Tab>
            ))}
          </Tabs.Row>
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
  const tabsNumber = number('Total number of tabs', 2);
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
