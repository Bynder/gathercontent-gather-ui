import React from 'react';
import { storiesOf } from '@storybook/react';
import faker from 'faker';
import { boolean, text } from '@storybook/addon-knobs';
import {
  Avatar,
  AvatarWithPopover,
  ParticipantInfo,
  AvatarInformation,
  Button
} from '../../index';
import StoryItem from '../../../stories/styleguide/StoryItem';
import notes from '../README.md';
import { AvatarGroupMock } from './AvatarGroupMock';

storiesOf('Components', module).add(
  'Avatar',
  () => {
    const name = text('Name', faker.name.findName());
    const email = text('Email', faker.internet.email());
    const colour = text('Colour', faker.commerce.color());
    const isHighlighted = boolean('Highlight', false);
    const showImage = boolean('Show avatar', false);
    const smallSize = boolean('Small avatars', false);
    const bordered = boolean('Bordered', false);
    const avatarUrl = faker.image.avatar();

    const props = {
      name,
      email,
      colour,
      smallSize,
      bordered,
      initials: `${[...name][0]}${[...name][1]}`,
      url: showImage ? avatarUrl : null,
      isHighlighted
    };

    return (
      <div>
        <StoryItem
          title="Avatar"
          description="A component for rendering a miniature profile of a user."
        >
          <Avatar {...props} />
        </StoryItem>

        <StoryItem
          title="Avatar (with popover)"
          description="An avatar can show a dropdown or popover on click, focus or hover."
        >
          <div className="h-display-flex">
            <div className="h-margin-right">
              <AvatarWithPopover
                {...props}
                triggerEvent="onClick"
                popoverClass="popover-dropdown"
                caret
              >
                <ul className="dropdown-menu">
                  <li className="dropdown__item">
                    <a href="#test" className="dropdown__link">
                      Personal Settings
                    </a>
                  </li>
                </ul>
              </AvatarWithPopover>
            </div>

            <AvatarWithPopover {...props}>
              <ParticipantInfo
                name={props.name}
                email={props.email}
                pillboxText="Assigned"
              />
            </AvatarWithPopover>
          </div>
        </StoryItem>

        <StoryItem
          title="Avatar (with inline information)"
          description="An avatar can display the users name & email inline. It also supports additional nodes."
        >
          <Avatar
            {...props}
            additional={
              <Button
                types={['link-danger', 'size-sm']}
                clickHandler={() => {}}
              >
                Link type
              </Button>
            }
          >
            <AvatarInformation name={props.name} email={props.email} />
          </Avatar>
        </StoryItem>

        <StoryItem
          title="Avatar Groups"
          description="An avatar group has a toggle to show extra users."
        >
          <AvatarGroupMock
            defaultCount={6}
            minCount={6}
            avatarProps={{ smallSize: props.smallSize }}
          >
            {({ ui }) => ui}
          </AvatarGroupMock>
        </StoryItem>
      </div>
    );
  },
  {
    notes: { markdown: notes }
  }
);
