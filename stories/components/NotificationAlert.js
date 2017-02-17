import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import NotificationAlert from '../../lib/NotificationAlert/';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Notifications', () => (
    <div>
      <StoryItem
        title="Notification Warning"
        description="A notification box with the warning level.">
        <NotificationAlert level="warning" text="Warning, I am too sexy for this notification." />
      </StoryItem>

      <StoryItem
        title="Notification Danger"
        description="A notification box with the danger level.">
        <NotificationAlert level="danger" text="You're about to delete your whole life." />
      </StoryItem>

      <StoryItem
        title="Notification Information"
        description="A notification box with the information level.">
        <NotificationAlert level="info" text="Did you know Nirvana started in Aberdeen?" />
      </StoryItem>
    </div>
  ));
