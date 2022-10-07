import React from 'react';
import faker from 'faker';
import {
  Avatar as AvatarComponent,
  AvatarWithPopover,
  ParticipantInfo,
  AvatarInformation,
  Button
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
    bordered: false,
    locked: false
  },
  argTypes: {
    colour: {
      name: 'Colour',
      control: { type: 'color' }
    }
  }
};

export const Avatar = args => {
  const avatarUrl = args.url;

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
        description="An avatar can show a tooltip on hover."
      >
        <div className="h-display-flex">
          <AvatarWithPopover {...props}>
            <ParticipantInfo name={props.name} email={props.email} />
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
