import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Notification from '../../lib/Notification';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Notifications', () => (
    <div>
      <StoryItem
        title="Notification Warning"
        description="A notification box with the warning level.">
        <Notification level="warning" text="Warning, I am too sexy for this notification." />
      </StoryItem>

      <StoryItem
        title="Notification Danger"
        description="A notification box with the danger level.">
        <Notification level="danger" text="You're about to delete your whole life." />
      </StoryItem>

      <StoryItem
        title="Notification Information"
        description="A notification box with the information level.">
        <Notification level="info" text="Did you know Nirvana started in Aberdeen?" />
      </StoryItem>
    </div>
  ));
