import React from 'react';
import faker from 'faker';
import {
  Avatar as AvatarComponent,
  AvatarWithPopover,
  ParticipantInfo,
  AvatarInformation,
  Button,
  MenuItem
} from '../../index';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { AvatarGroupMock } from './AvatarGroupMock';

export default {
  title: 'Legacy/Avatar',
  component: AvatarComponent,
  args: {
    name: faker.name.findName(),
    email: faker.internet.email(),
    colour: faker.commerce.color(),
    isHighlighted: false,
    showImage: false,
    smallSize: false,
    bordered: false
  },
  argTypes: {
    colour: {
      name: 'Colour',
      control: { type: 'color' }
    }
  }
};

export const Avatar = args => {
  const avatarUrl = faker.image.avatar();

  const props = {
    ...args,
    initials: args.name.substring(0, 2),
    url: args.showImage ? avatarUrl : null
  };

  const { colour, ...propsWithoutColour } = props;

  return (
    <div>
      <StoryItem
        title="AvatarComponent"
        description="A component for rendering a miniature profile of a user."
      >
        <AvatarComponent {...props} />
      </StoryItem>

      <StoryItem
        title="AvatarComponent (with popover)"
        description="An avatar can show a dropdown or popover on click, focus or hover."
      >
        <div className="h-display-flex">
          <div className="h-margin-right">
            <AvatarWithPopover
              {...props}
              triggerEvent="onClick"
              caret
              collapseDropdown
            >
              <MenuItem href="#test">Personal Settings</MenuItem>
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
        title="AvatarComponent (with inline information)"
        description="An avatar can display the users name & email inline. It also supports additional nodes."
      >
        <AvatarComponent
          {...props}
          additional={
            <Button types={['link-danger', 'size-sm']} clickHandler={() => {}}>
              Link type
            </Button>
          }
        >
          <AvatarInformation name={props.name} email={props.email} />
        </AvatarComponent>
      </StoryItem>

      <StoryItem
        title="AvatarComponent Groups"
        description="An avatar group has a toggle to show extra users."
      >
        <AvatarGroupMock
          defaultCount={6}
          minCount={6}
          avatarProps={propsWithoutColour}
        >
          {({ ui }) => ui}
        </AvatarGroupMock>
      </StoryItem>
    </div>
  );
};