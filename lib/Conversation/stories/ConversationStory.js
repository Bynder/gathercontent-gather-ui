import React from 'react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Conversation } from 'lib';
import BoundaryClickWatcher from '../../BoundaryClickWatcher';
import { ConversationHeaderForStory } from './ConversationHeaderForStory';
import { ConversationFooterForStory } from './ConversationFooterForStory';
import { ConversationBodyForStory } from './ConversationBodyForStory';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

export const Conversations = () => {
  const isOpen = boolean('Is Open', false, 'Show/Hide');
  const isSubscribed = boolean('Subscribed', false, 'Header');
  const isResolved = boolean('Resolved', false, 'Header');
  const userCanResolve = boolean('User can resolve', true, 'Header');
  const commentHasFailedToSubscribe = boolean(
    'Comment has failed to subscribe',
    false,
    'Header'
  );
  const headerProps = {
    isOpen,
    isResolved,
    userCanResolve,
    isSubscribed,
    commentHasFailedToSubscribe,
  };

  const commentHasFailedToSave = boolean(
    'Comment has failed to save',
    false,
    'Body'
  );

  const commentHasFailedToDelete = boolean(
    'Comment has failed to delete',
    false,
    'Body'
  );

  const bodyProps = {
    isOpen,
    commentHasFailedToSave,
    commentHasFailedToDelete,
  };

  return (
    <div
      style={{
        maxWidth: '300px',
      }}
    >
      <BoundaryClickWatcher>
        {(boundaryIsActive, boundaryIsFocussed) => (
          <Conversation
            isOpen={boundaryIsActive || isOpen}
            isFocussed={boundaryIsFocussed}
          >
            <ConversationHeaderForStory
              {...headerProps}
              isOpen={boundaryIsActive || isOpen}
            />
            <ConversationBodyForStory
              {...bodyProps}
              isOpen={boundaryIsActive || isOpen}
            />
            <ConversationFooterForStory
              isOpen={boundaryIsActive || isOpen}
              isFocussed={boundaryIsFocussed}
            />
          </Conversation>
        )}
      </BoundaryClickWatcher>
    </div>
  );
};
