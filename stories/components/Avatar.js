import React from 'react';
import { storiesOf, action } from '@storybook/react';
import AvatarPresence from '../../lib/AvatarPresence/';
import AvatarPresenceGroup from '../../lib/AvatarPresence/AvatarGroup';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Avatar', () => {
    return (
      <div>
        <StoryItem
          title="Avatar — only with initials"
          description="Simple avatars, to be used individually (not in a group). Here, examples with two colours passed through the component, with one assigned user (hover to see the tooltip).">
            <div>
              <AvatarPresence
                url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
                onlyInitials
                initials="SB"
                name="Seymour Butts"
                email="example@gmail.com"
            />

            <AvatarPresence
              initials="PC"
              url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
              onlyInitials
              colour="rgb(230, 133, 173)"
              name="Poppy Cox"
              email="poppycox@gmail.com"
              isAssigned
            />
            </div>
        </StoryItem>

        <StoryItem
          title="Avatar — with image"
          description="Without the `onlyInitials` prop and given a URL, it will display the image URL as the background.">
          <AvatarPresence
            url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
            name="Seymour Butts"
            email="example@gmail.com"
          />
        </StoryItem>

        <StoryItem
          title="Avatar — faded out (signed off)"
          description="Without the `onlyInitials` prop and given a URL, it will display the image URL as the background.">
          <AvatarPresence
            onlyInitials
            name="Seymour Butts"
            initials="SB"
            email="example@gmail.com"
            fadedOut
          />
        </StoryItem>

         <StoryItem
          title="Avatar List Group"
          description="A list of overlapping avatars can be used by wrapping them in a `AvatarPresenceGroup` component.">
            <AvatarPresenceGroup>
              <AvatarPresence email="poppycox@gmail.com" onlyInitials isAssigned colour="rgb(249,95,93)" initials="MR" name="Mike Rotch" />
              <AvatarPresence email="hugh@gmail.com" onlyInitials initials="HJ" name="Hugh Jass" />
              <AvatarPresence email="la@gmail.com" onlyInitials colour="rgb(249,95,93)" initials="LA" name="Seymour Butts" />
            </AvatarPresenceGroup>
        </StoryItem>

        <StoryItem
          title="Avatar List Group — extra users"
          description="A list of overlapping avatars can be used by wrapping them in a `AvatarPresenceGroup` component, only fitting in a maximum number of N. Other avatars can be displayed by tapping the plus sign.">
            <AvatarPresenceGroup maximum={1}>
              <AvatarPresence email="poppycox@gmail.com" onlyInitials isAssigned fadedOut initials="MR" name="Mike Rotch" />
              <AvatarPresence email="hugh@gmail.com" onlyInitials fadedOut initials="HJ" name="Hugh Jass" />
              <AvatarPresence email="la@gmail.com" onlyInitials fadedOut initials="FD" name="Fedra Droid" />
              <AvatarPresence email="la@gmail.com" onlyInitials fadedOut initials="KM" name="Kann Schemll" />
            </AvatarPresenceGroup>
        </StoryItem>
      </div>
    );
  });
