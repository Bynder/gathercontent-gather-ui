import React from 'react';
import NotificationInline from 'lib/Notification/inline';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Notifications/Inline Notifications',
  component: NotificationInline
};

export const InlineNotifications = () => (
  <div>
    <StoryItem
      title="NotificationInline Warning"
      description="A notification box with the warning level."
    >
      <NotificationInline level="warning">
        Warning, I am too sexy for this notification.
      </NotificationInline>
    </StoryItem>

    <StoryItem
      title="NotificationInline Danger"
      description="A notification box with the danger level."
    >
      <NotificationInline level="danger">
        You're about to delete your whole life.
      </NotificationInline>
    </StoryItem>

    <StoryItem
      title="NotificationInline Information"
      description="A notification box with the information level."
    >
      <NotificationInline level="information" showShadow={false}>
        Did you know <strong>Nirvana</strong> started in <u>Aberdeen</u>?
      </NotificationInline>
    </StoryItem>

    <StoryItem
      title="NotificationInline Success"
      description="A notification box with the success level."
    >
      <NotificationInline level="success">
        You did it! Great job!
      </NotificationInline>
    </StoryItem>
  </div>
);

InlineNotifications.parameters = {
  controls: { hideNoControlsWarning: true }
};
