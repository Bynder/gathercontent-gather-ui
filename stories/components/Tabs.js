import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Tabs from '../../lib/Tabs';
import StoryItem from '../styleguide/StoryItem';
import Icon from '../../lib/Icon';

const options = [{
  name: 'Edit',
  action: () => {},
}, {
  name: 'Delete',
  action: () => {},
}, {
  name: 'Move Left',
  action: () => {},
}, {
  name: 'Move Right',
  action: () => {},
}];

storiesOf('Components', module)
  .add('Tabs', () => {
    return (
      <div>
        <StoryItem
          title="Tabs"
          description="Components that renders a both the tabs container and individual tabs."
        >
          <Tabs activeTabId="content" onTabChange={(id) => console.log(`tab changed to ${id}`)}>
            <Tabs.Item id="content">Content</Tabs.Item>
            <Tabs.Item id="meta">Meta</Tabs.Item>
            <Tabs.Item id="english">English</Tabs.Item>
            <Tabs.Item id="french">French</Tabs.Item>
            <Tabs.Item id="german">German</Tabs.Item>
          </Tabs>
        </StoryItem>

        <StoryItem
          title="Tabs: Outlined"
          description="Tabs can be outlined, which is helpful when the text inside are editable."
        >
          <Tabs
            activeTabId="meta"
            onTabChange={(id) => console.log(`tab changed to ${id}`)}
            editable
          >
            <Tabs.Item id="content">Content</Tabs.Item>
            <Tabs.Item id="meta">Meta</Tabs.Item>
            <Tabs.Item id="english">English</Tabs.Item>
            <Tabs.Item id="french">French</Tabs.Item>
            <Tabs.Item id="german">German</Tabs.Item>
          </Tabs>
        </StoryItem>

        <StoryItem
          title="Tabs: With Options"
          description="Tabs can show options per tab in a drop down."
        >
          <Tabs activeTabId="english" onTabChange={(id) => console.log(`tab changed to ${id}`)}>
            <Tabs.Item id="content" options={options}>Content</Tabs.Item>
            <Tabs.Item id="meta" options={options}>Meta</Tabs.Item>
            <Tabs.Item id="english" options={options}>English</Tabs.Item>
            <Tabs.Item id="french" options={options}>French</Tabs.Item>
            <Tabs.Item id="german" options={options}>German</Tabs.Item>
          </Tabs>
        </StoryItem>

        <StoryItem
          title="Tabs: Buttons"
          description="Tabs can be buttons, which do not change the active tab but instead fire a function."
        >
          <Tabs activeTabId="french" onTabChange={(id) => console.log(`tab changed to ${id}`)}>
            <Tabs.Item id="content">Content</Tabs.Item>
            <Tabs.Item id="meta">Meta</Tabs.Item>
            <Tabs.Item id="english">English</Tabs.Item>
            <Tabs.Item id="french">French</Tabs.Item>
            <Tabs.Item id="german">German</Tabs.Item>
            <Tabs.Button onClick={() => console.log('Tab button clicked')}>
              <Icon name="plus" className="fill-primary-blue" />
            </Tabs.Button>
          </Tabs>
        </StoryItem>
      </div>
    );
  });