import React, { useContext, useState } from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'uuid... Remove this comment to see the full error message
import { v4 } from "uuid";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from "faker";
import { ButtonSecondary, Tabs as TabsComponent } from "lib";
import Dropdown from "../../lib/Dropdown";
import { TabContext } from "../../lib/TabsNew/Tab";

function RenameTabActionExample() {
  const { formInputRef }: any = useContext(TabContext);

  return (
    <Dropdown.ActionGroup className="text-neutral-20 font-normal">
      <Dropdown.Action
        className="text-neutral-20 weight-roman"
        action={() => formInputRef.current.focus()}
      >
        Action text
      </Dropdown.Action>
    </Dropdown.ActionGroup>
  );
}

// eslint-disable-next-line react/prop-types
function TabsStory({ tabs, dragSide, dragIndex, editable }: any) {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const numberOfRows = Math.ceil(tabs.length / 8);
  const rows = [...new Array(numberOfRows)].map((i, index) => {
    const start = index * 8;
    return tabs.slice(start, start + 8);
  });

  return (
    <TabsComponent tabsLength={tabs.length} activeTabId={activeTabId}>
      <TabsComponent.Group>
        {rows.map((r) => (
          <TabsComponent.Row key={v4()}>
            {r.map((t: any, index: any) => (
              <TabsComponent.Tab id={t.id} index={index} key={v4()}>
                {(wrapperClasses: any, buttonClasses: any) => (
                  <div className={wrapperClasses}>
                    {!editable ? (
                      <button
                        type="button"
                        className={buttonClasses}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTabId(t.id);
                        }}
                        title={t.name}
                      >
                        <TabsComponent.TabName>{t.name}</TabsComponent.TabName>
                      </button>
                    ) : (
                      <TabsComponent.TabNameForm
                        tab={t}
                        className={`${buttonClasses}`}
                        setActiveTab={(e: any) => {
                          e.preventDefault();
                          setActiveTabId(t.id);
                        }}
                        submitTabForm={() => {}}
                      />
                    )}

                    <TabsComponent.TabAside>
                      {editable && (
                        <TabsComponent.TabOptions>
                          <RenameTabActionExample />
                        </TabsComponent.TabOptions>
                      )}
                    </TabsComponent.TabAside>

                    {dragSide && dragIndex === index && (
                      <TabsComponent.TabDragLine side={dragSide} />
                    )}
                  </div>
                )}
              </TabsComponent.Tab>
            ))}
          </TabsComponent.Row>
        ))}
      </TabsComponent.Group>

      <TabsComponent.ActionGroup>
        <ButtonSecondary
          className="rounded-b border-t-0 rounded-t-none"
          onClick={() => {}}
        >
          + New Tab
        </ButtonSecondary>
      </TabsComponent.ActionGroup>
    </TabsComponent>
  );
}

export default {
  title: "Legacy/Tabs",
  component: TabsComponent,
  args: {
    editable: true,
    tabsNumber: 3,
    dragIndex: 0,
    noOfTabs: 3,
  },
  argTypes: {
    dragSide: {
      name: "Drag side",
      control: { type: "select" },
      options: [null, "left", "right", "whole"],
    },
  },
};

export function Tabs(args: any) {
  const tabs = [...Array(args.tabsNumber).keys()].map(() => ({
    id: v4(),
    name: faker.commerce.productName(),
  }));

  return <TabsStory tabs={tabs} {...args} />;
}
