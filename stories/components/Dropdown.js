import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { Dropdown, Button } from '../../lib/';
import StoryItem from '../styleguide/StoryItem';

const dropdownContent = (
  <Dropdown.Content>
    <Dropdown.ItemGroup>
      <Dropdown.Item action={() => action('action clicked')}>
        Dropdown item 1
      </Dropdown.Item>
      <Dropdown.Item action={() => action('action clicked')}>
        Dropdown item 2
      </Dropdown.Item>
    </Dropdown.ItemGroup>

    <Dropdown.ItemGroup>
      <Dropdown.Item action={() => action('action clicked')} danger>
        Dropdown item 3
      </Dropdown.Item>
    </Dropdown.ItemGroup>
  </Dropdown.Content>
);

storiesOf('Components', module)
  .add('Dropdown', () => {
    return (
      <div>
        <StoryItem
          title="Dropdown"
          description="..."
        >
          <Dropdown>
            <Dropdown.Trigger>
              Show content
            </Dropdown.Trigger>

            {dropdownContent}
          </Dropdown>

          <Dropdown>
            <Dropdown.Trigger>
              Show content
            </Dropdown.Trigger>

            {dropdownContent}
          </Dropdown>
        </StoryItem>

        <StoryItem
          title="Dropdown"
          description="..."
        >
          <Dropdown>
            <Dropdown.Trigger button>
              Show content
            </Dropdown.Trigger>

            {dropdownContent}
          </Dropdown>

          <Dropdown>
            <Dropdown.Trigger button>
              Show content
            </Dropdown.Trigger>

            {dropdownContent}
          </Dropdown>
        </StoryItem>
      </div>
    );
  });
