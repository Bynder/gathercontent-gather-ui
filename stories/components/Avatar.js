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
          title="Avatar"
          description="...">
            <div>
              <AvatarPresence
              url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
              onlyInitials
              initials="RF"
              label="Seymour Butts"
            />

            <AvatarPresence
              initials="MM"
              url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
              onlyInitials
              colour="rgb(230, 133, 173)"
              label="Seymour Butts"
            />
            </div>
        </StoryItem>

        <StoryItem
          title="Avatar"
          description="...">
          <AvatarPresence
            url="https://pbs.twimg.com/profile_images/766954609306927104/ZHAfr9OP_400x400.jpg"
            label="Seymour Butts"
          />
        </StoryItem>

         <StoryItem
          title="Avatar List Group"
          description="...">
            <AvatarPresenceGroup>
              <AvatarPresence onlyInitials colour="rgb(249,95,93)" initials="TR" label="Seymour Butts" />
              <AvatarPresence onlyInitials initials="BA" label="Seymour Butts" />
              <AvatarPresence onlyInitials colour="rgb(249,95,93)" initials="LA" label="Seymour Butts" />
            </AvatarPresenceGroup>
        </StoryItem>
      </div>
    );
  });
