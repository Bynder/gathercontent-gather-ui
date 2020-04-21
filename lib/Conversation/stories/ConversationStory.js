import React from 'react';
import { storiesOf } from '@storybook/react';
import { NewConversation } from './NewConversation';
import { SimpleConversation } from './SimpleConversation';
import { ConversationWithReply } from './ConversationWithReply';
import { CollapsedConversationWithReply } from './CollapsedConversationWithReply';
import { CollapsedConversationWrappedBoundary } from './CollapsedConversationWrappedBoundary';
import { FailedConversation } from './FailedConversation';
import { LongConversation } from './LongConversation';

const stories = storiesOf('Components/Conversations', module);

stories.add('Starting a new conversation', () => {
  return <NewConversation />;
});

stories.add('A simple conversation', () => {
  return <SimpleConversation />;
});

stories.add('Conversation with reply', () => {
  return <ConversationWithReply />;
});

stories.add('Collapsed Conversation with reply', () => {
  return <CollapsedConversationWithReply />;
});

stories.add(
  'Collapsed Conversation with reply wrapped in BoundaryClickWatcher',
  () => {
    return <CollapsedConversationWrappedBoundary />;
  }
);

stories.add('Conversation with failed comment', () => {
  return <FailedConversation />;
});

stories.add('A very long conversation', () => {
  return <LongConversation />;
});
