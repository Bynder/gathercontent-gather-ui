import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../../lib/Avatar/';
import AvatarWithPopover from '../../lib/Avatar/AvatarWithPopover';
import AvatarGroup from '../../lib/AvatarGroup';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Avatar', () => {
    return (
      <div>
        <StoryItem
          title="Avatar – base"
          description="A base avatar will fall back to initials if no url prop is passed."
        >
          <div>
            <Avatar
              url=""
              initials="SB"
              name="Seymour Butts"
              email="example@gmail.com"
              colour="rgb(155, 223, 190)"
            />
          </div>
        </StoryItem>

        <StoryItem
          title="Avatar – with image"
          description="An avatar can display an image."
        >
          <Avatar
            url="https://d3iw72m71ie81c.cloudfront.net/female-83.jpg"
            name="Seymour Butts"
            email="example@gmail.com"
            colour="rgb(255, 255, 255)"
          />
        </StoryItem>

        <StoryItem
          title="Avatar - with image and popover"
          description="An avatar can show a popover on focus or hover."
        >
          <AvatarWithPopover
            url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
            name="Seymour Butts"
            email="example@gmail.com"
            pillboxText="Assigned"
            isHighlighted
          />
        </StoryItem>

        <StoryItem
          title="Avatar - highlighted, online, offline (with and without image)"
          description="An avatar can have multiple states, these can be highlighted, online and offline."
        >
          <AvatarGroup maximum={6}>
            <Avatar
              initials="BH"
              isHighlighted
              colour="rgb(252, 92, 84)"
            />
            <Avatar
              url="https://d3iw72m71ie81c.cloudfront.net/male-67.jpg"
              initials="BH"
              colour="rgb(255, 255, 255)"
              isHighlighted
            />
            <Avatar
              initials="KH"
              colour="rgb(95, 207, 128)"
            />
            <Avatar
              url="https://d3iw72m71ie81c.cloudfront.net/female-53.jpg"
              initials="BH"
              colour="rgb(255, 255, 255)"
            />
            <Avatar
              initials="JD"
              offline
            />
            <Avatar
              url="https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg"
              initials="BH"
              colour="rgb(255, 255, 255)"
              offline
            />
          </AvatarGroup>
        </StoryItem>

        <StoryItem
          title="Avatar Group"
          description="An avatar group has a toggle to show extra users.">
          <AvatarGroup maximum={2}>
            <Avatar
              url="https://d3iw72m71ie81c.cloudfront.net/male-52.jpg"
              initials="BH"
              colour="rgb(255, 255, 255)"
            />
            <Avatar
              url="https://d3iw72m71ie81c.cloudfront.net/male-5.jpg"
              initials="BH"
              colour="rgb(255, 255, 255)"
            />
            <Avatar
              url="https://d3iw72m71ie81c.cloudfront.net/female-34.jpg"
              initials="BH"
              colour="rgb(255, 255, 255)"
            />
            <Avatar
              url="https://d3iw72m71ie81c.cloudfront.net/male-66.jpg"
              initials="BH"
              colour="rgb(255, 255, 255)"
            />
            <Avatar
              url="https://d3iw72m71ie81c.cloudfront.net/b86f0cda-6219-4453-a93b-e34e16d3b52d-Nicola_Rushton_photo.jpg"
              initials="BH"
              colour="rgb(255, 255, 255)"
            />
            <Avatar
              url="https://d3iw72m71ie81c.cloudfront.net/male-90.jpg"
              initials="BH"
              colour="rgb(255, 255, 255)"
            />
          </AvatarGroup>
        </StoryItem>
      </div>
    );
  });
