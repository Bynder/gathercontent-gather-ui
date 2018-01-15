import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Tabs from '../../lib/Tabs';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Tabs', () => {
    return (
      <div>
        <StoryItem
          title="Tabs"
          description="Components that renders a both the tabs container and each individual tab"
        >
          <Tabs activeTabId="123" onTabChange={(id) => console.log(`tab changed to ${id}`)}>
            <Tabs.Item id="123">Tab 1</Tabs.Item>
            <Tabs.Item id="321">Tab 2</Tabs.Item>
            <Tabs.Button id="321" onClick={() => console.log('Tab button clicked')}>+</Tabs.Button>
          </Tabs>
        </StoryItem>
      </div>
    );
  });
