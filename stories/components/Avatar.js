import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../../lib/Avatar/';
import AvatarWithPopover from '../../lib/Avatar/AvatarWithPopover';
import AvatarGroup from '../../lib/AvatarGroup';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Avatar', () => (
  <div>
    <StoryItem
      title="Avatar – base"
      description="A base avatar will fall back to initials if no url prop is passed."
    >
      <Avatar name="Seymour Butts" />
    </StoryItem>

    <StoryItem
      title="Avatar – highlighted"
      description="An avatar can be highlighted."
    >
      <Avatar isHighlighted name="Seymour Butts" />
    </StoryItem>

    <StoryItem
      title="Avatar – with image"
      description="An avatar can display an image."
    >
      <Avatar url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg" />
    </StoryItem>

    <StoryItem
      title="Avatar - offline"
      description="An avatar can show a user as offline."
    >
      <Avatar
        url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
        name="Seymour Butts"
        isOffline
      />
      <Avatar name="Seymour Butts" isOffline />
    </StoryItem>

    <StoryItem
      title="Avatar - with popover"
      description="An avatar can show a popover on focus or hover."
    >
      <AvatarWithPopover
        name="Seymour Butts"
        email="example@gmail.com"
        pillboxText="Assigned"
      />
    </StoryItem>

    <StoryItem
      title="Avatar - custom border colour"
      description="An avatar can have a custom border colour."
    >
      <Avatar
        url="https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg"
        name="Seymour Butts"
        colour="red"
      />
    </StoryItem>

    <StoryItem
      title="Avatar Group"
      description="An avatar group has a toggle to show extra users."
    >
      <AvatarGroup maximum={2}>
        <Avatar name="Richard Swagshaw" colour="rgb(252, 92, 84)" />
        <Avatar name="James Darracott" colour="rgb(61, 138, 235)" />
        <Avatar name="James Deer" colour="rgb(95, 207, 128)" />
        <Avatar name="Alice Deer" colour="rgb(249, 223, 110)" />
        <Avatar name="Mat" colour="rgb(150, 93, 232)" />
        <Avatar name="Pickle Rik" colour="rgb(147, 114, 79)" />
      </AvatarGroup>
    </StoryItem>
  </div>
));
