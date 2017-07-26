import React from 'react';
import {storiesOf, action} from '@storybook/react';
import Avatar from '../../lib/Avatar/';
import AvatarWithTooltip from '../../lib/Avatar/AvatarWithTooltip';
import AvatarGroup from '../../lib/AvatarGroup';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Avatar', () => {
    return (
      <div>
        <StoryItem
          title="Avatar — falls back to initials"
          description="If a url prop isn't given to Avatar, it will fallback to its initials."
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
          title="Avatar — only with initials"
          description="Simple avatars, to be used individually (not in a group). Here, examples with two colours passed through the component, with one assigned user."
        >
          <div>
            <Avatar
              url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
              onlyInitials
              initials="SB"
              name="Seymour Butts"
              email="example@gmail.com"
              colour="rgb(155, 223, 190)"
            />

            <Avatar
              initials="PC"
              onlyInitials
              colour="rgb(200, 133, 173)"
              name="Poppy Cox"
              email="poppycox@gmail.com"
              isHighlighted
            />
          </div>
        </StoryItem>

        <StoryItem
          title="Avatar — with image"
          description="Passing a `url` property displays the avatar image."
        >
          <Avatar
            url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
            name="Seymour Butts"
            email="example@gmail.com"
          />
        </StoryItem>

        <StoryItem
          title="Avatar — with image and tooltip"
          description="We can use the `AvatarWithTooltip` component to have a tooltip displayed on the avatar."
        >
          <AvatarWithTooltip
            url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
            name="Seymour Butts"
            email="example@gmail.com"
          />
        </StoryItem>

        <StoryItem
          title="Avatar — with image and tooltip"
          description="Without the `onlyInitials` prop and given a URL, it will display the image URL as the background."
        >
          <AvatarWithTooltip
            url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
            name="Seymour Butts"
            email="example@gmail.com"
            pillboxText="Assigned"
            isHighlighted
          />
        </StoryItem>

        <StoryItem
          title="Avatar — faded out (signed off)"
          description="Without the `onlyInitials` prop and given a URL, it will display the image URL as the background."
        >
          <Avatar
            onlyInitials
            name="Seymour Butts"
            initials="SB"
            email="example@gmail.com"
            offline
          />
        </StoryItem>

        <StoryItem
          title="Avatar — with image, offline"
          description="An avatar with an image, but offline, appears greyed out."
        >
          <Avatar
            url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
            name="Seymour Butts"
            initials="SB"
            email="example@gmail.com"
            offline
          />
        </StoryItem>

        <StoryItem
          title="Avatar List Group"
          description="A list of overlapping avatars can be used by wrapping them in a `AvatarPresenceGroup` component."
        >
          <AvatarGroup>
            <Avatar email="poppycox@gmail.com" onlyInitials isHighlighted initials="MR" name="Mike Rotch"/>
            <Avatar email="hugh@gmail.com" onlyInitials initials="HJ" name="Hugh Jass"/>
            <Avatar email="la@gmail.com" onlyInitials initials="LA" name="Seymour Butts"/>
          </AvatarGroup>
        </StoryItem>

        <StoryItem
          title="Avatar List Group"
          description="It can still hold just one item, or none."
        >
          <AvatarGroup>
            <Avatar email="poppycox@gmail.com" onlyInitials isHighlighted colour="rgb(249,95,93)" initials="MR"
                    name="Mike Rotch"/>
          </AvatarGroup>
        </StoryItem>

        <StoryItem
          title="Avatar List Group — extra users"
          description="A list of overlapping avatars can be used by wrapping them in a `AvatarGroup` component, only fitting in a maximum number of N. Other avatars can be displayed by tapping the plus sign.">
          <AvatarGroup maximum={1}>
            <Avatar url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg" email="poppycox@gmail.com" isHighlighted offline initials="MR" name="Mike Rotch"/>
            <Avatar email="hugh@gmail.com" colour="rgb(249,99,89)" offline initials="HJ" name="Hugh Jass"/>
            <Avatar email="la@gmail.com" offline initials="FD" name="Fedra Droid"/>
            <Avatar email="la@gmail.com" offline initials="KM" name="Kann Schemll"/>
          </AvatarGroup>
        </StoryItem>
      </div>
    );
  });
