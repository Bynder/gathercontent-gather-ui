import React from 'react';
import { action } from '@storybook/addon-actions';
import NotificationBar from '../../lib/Notification/bar';
import NotificationInline from '../../lib/Notification/inline';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const NotificationBars = () => (
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
      <NotificationBar level="warning" clickHandler={action('clickHandler')}>
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

NotificationBars.story = {
  name: 'NotificationBars',
};

export const _NotificationInline = () => (
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

_NotificationInline.story = {
  name: 'NotificationInline',
};
