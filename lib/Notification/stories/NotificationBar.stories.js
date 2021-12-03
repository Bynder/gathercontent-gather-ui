import React from 'react';
import { NotificationBar } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Notifications/Notification Bars',
  component: NotificationBar,
  argTypes: {
    onClick: { action: 'You clicked me!' }
  }
};

export const NotificationBars = args => (
  <div>
    <StoryItem
      title="NotificationBar Warning"
      description="A notification box with the warning level."
    >
      <NotificationBar level="warning">
        Warning, I am too sexy for this notification.
      </NotificationBar>
    </StoryItem>

    <StoryItem
      title="NotificationBar Danger"
      description="A notification box with the danger level."
    >
      <NotificationBar level="danger">
        You're about to delete your whole life.
      </NotificationBar>
    </StoryItem>

    <StoryItem
      title="NotificationBar Information"
      description="A notification box with the information level."
    >
      <NotificationBar level="information">
        Did you know <strong>Nirvana</strong> started in <u>Aberdeen</u>?
      </NotificationBar>
    </StoryItem>

    <StoryItem
      title="NotificationBar Promo"
      description="A notification box with the promo level."
    >
      <NotificationBar level="promo">
        Did you know Nirvana started in <a href="/">Aberdeen</a>?
      </NotificationBar>
    </StoryItem>

    <StoryItem
      title="NotificationBar (with a click handler)"
      description="A notification can handle click interactions."
    >
      <NotificationBar level="warning" clickHandler={args.onClick}>
        <strong>You have overdue projects.</strong>
      </NotificationBar>
    </StoryItem>

    <StoryItem
      title="NotificationBar with close button"
      description="A notification box with an optional close button."
    >
      <NotificationBar level="warning" onClose={() => {}}>
        Warning, I am too sexy for this notification.
      </NotificationBar>
    </StoryItem>

    <StoryItem
      title="Centered NotificationBar with close button"
      description="A centered notification box with an optional close button."
    >
      <NotificationBar level="warning" center onClose={() => {}}>
        Warning, I am too sexy for this notification.
      </NotificationBar>
    </StoryItem>
  </div>
);

NotificationBars.parameters = {
  controls: { hideNoControlsWarning: true }
};
