import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { Dropdown, Avatar, AvatarInformation } from '../../lib/';
import StoryItem from '../styleguide/StoryItem';

const createContentWithItems = props => (
  <Dropdown.Content {...props} collapse>
    <Dropdown.ActionGroup>
      <Dropdown.Action action={() => action('action clicked')}>
        Dropdown item 1
      </Dropdown.Action>
      <Dropdown.Action action={() => action('action clicked')}>
        Dropdown item 2
      </Dropdown.Action>
      <Dropdown.Action action={() => action('action clicked')}>
        Dropdown item 3
      </Dropdown.Action>
    </Dropdown.ActionGroup>

    <Dropdown.ActionGroup>
      <Dropdown.Action action={() => action('action clicked')} danger>
        Danger dropdown item
      </Dropdown.Action>
    </Dropdown.ActionGroup>
  </Dropdown.Content>
);

storiesOf('Components', module)
  .add('Dropdown', () => {
    return (
      <div>
        <StoryItem
          title="Dropdown"
          description="A dropdown contains a trigger and content. Both can be take any form."
        >
          <Dropdown id="id-1">
            <Dropdown.Trigger>
              <strong>Click on me to show the dropdown</strong>
            </Dropdown.Trigger>

            <Dropdown.Content>
              <Avatar
                url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
              >
                <AvatarInformation
                  email="heythere@lol.com"
                  name="Mr Ben"
                />
              </Avatar>
            </Dropdown.Content>
          </Dropdown>
        </StoryItem>

        <StoryItem
          title="Dropdown with Button triggers"
          description="Triggers can also use the Button component, which is common."
        >
          <Dropdown id="id-2">
            <Dropdown.Trigger useButton>
              Show content
            </Dropdown.Trigger>

            <Dropdown.Content>
              {(showContent) =>
                <button tabIndex={showContent ? 0 : -1}>Focusable element</button>
              }
            </Dropdown.Content>
          </Dropdown>
        </StoryItem>

        <StoryItem
          title="Dropdown with different alignments"
          description="The dropdown content can be aligned to different points of the trigger."
        >
          <Dropdown id="id-3">
            <Dropdown.Trigger useButton>
              Left alignment
            </Dropdown.Trigger>

            {createContentWithItems()}
          </Dropdown>

          <Dropdown id="id-4">
            <Dropdown.Trigger useButton>
              Centre alignment
            </Dropdown.Trigger>

            {createContentWithItems({ centre: true })}
          </Dropdown>

          <Dropdown id="id-5">
            <Dropdown.Trigger useButton>
              Right alignment
            </Dropdown.Trigger>

            {createContentWithItems({ right: true })}
          </Dropdown>
        </StoryItem>

        <StoryItem
          title="Dropdown with top alignment"
          description="The dropdown content can also be vertically aligned so it appears above the trigger."
        >
          <Dropdown id="id-6">
            <Dropdown.Trigger useButton>
              Top left alignment
            </Dropdown.Trigger>

            {createContentWithItems({ top: true })}
          </Dropdown>

          <Dropdown id="id-7">
            <Dropdown.Trigger useButton>
              Top centre alignment
            </Dropdown.Trigger>

            {createContentWithItems({ top: true, centre: true })}
          </Dropdown>

          <Dropdown id="id-8">
            <Dropdown.Trigger useButton>
              Top right alignment
            </Dropdown.Trigger>

            {createContentWithItems({ top: true, right: true })}
          </Dropdown>
        </StoryItem>
      </div>
    );
  });
