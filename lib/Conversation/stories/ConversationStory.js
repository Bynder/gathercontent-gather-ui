import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Conversation } from 'lib';
import { NewConversation } from './NewConversation';
import { SimpleConversation } from './SimpleConversation';
import { ConversationWithReply } from './ConversationWithReply';
import { CollapsedConversationWithReply } from './CollapsedConversationWithReply';
import { CollapsedConversationWrappedBoundary } from './CollapsedConversationWrappedBoundary';
import { FailedConversation } from './FailedConversation';
import { LongConversation } from './LongConversation';
import BoundaryClickWatcher from '../../BoundaryClickWatcher';
import { ConversationHeaderForStory } from './ConversationHeaderForStory';
import { ConversationFooterForStory } from './ConversationFooterForStory';
import { ConversationBodyForStory } from './ConversationBodyForStory';

const stories = storiesOf('Components/Conversations', module);
stories.addDecorator(withKnobs);

stories.add('Conversations', () => {
  const isActive = boolean('Active', true, 'Show/Hide');
  const isSubscribed = boolean('Subscribed', false, 'Header');
  const isResolved = boolean('Resolved', false, 'Header');
  const userCanResolve = boolean('User can resolve', true, 'Header');
  const headerProps = { isActive, isResolved, userCanResolve, isSubscribed };

  return (
    <BoundaryClickWatcher>
      {(boundaryIsActive, boundaryIsFocussed) => (
        <Conversation
          isActive={boundaryIsActive || isActive}
          isFocussed={boundaryIsFocussed}
        >
          <ConversationHeaderForStory
            {...headerProps}
            isActive={boundaryIsActive || isActive}
          />
          <ConversationBodyForStory isActive={boundaryIsActive || isActive} />
          <ConversationFooterForStory isActive={boundaryIsActive || isActive} />
        </Conversation>
      )}
    </BoundaryClickWatcher>
  );
});
//
// stories.add('A simple conversation', () => {
//   return <SimpleConversation />;
// });
//
// stories.add('Conversation with reply', () => {
//   return <ConversationWithReply />;
// });
//
// stories.add('Collapsed Conversation with reply', () => {
//   return <CollapsedConversationWithReply />;
// });
//
// stories.add(
//   'Collapsed Conversation with reply wrapped in BoundaryClickWatcher',
//   () => {
//     return <CollapsedConversationWrappedBoundary />;
//   }
// );
//
// stories.add('Conversation with failed comment', () => {
//   return <FailedConversation />;
// });
//
// stories.add('A very long conversation', () => {
//   return <LongConversation />;
// });
