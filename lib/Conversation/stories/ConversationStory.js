import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { Conversation } from 'lib';
import BoundaryClickWatcher from '../../BoundaryClickWatcher';
import { ConversationHeaderForStory } from './ConversationHeaderForStory';
import { ConversationFooterForStory } from './ConversationFooterForStory';
import { ConversationBodyForStory } from './ConversationBodyForStory';

const stories = storiesOf('Components/Conversations', module);
stories.addDecorator(withKnobs);

stories.add('Conversations', () => {
  const isOpen = boolean('Is Open', true, 'Show/Hide');
  const isSubscribed = boolean('Subscribed', false, 'Header');
  const isResolved = boolean('Resolved', false, 'Header');
  const userCanResolve = boolean('User can resolve', true, 'Header');
  const headerProps = { isOpen, isResolved, userCanResolve, isSubscribed };

  const commentHasFailedToSave = boolean(
    'Comment has failed to save',
    false,
    'Body'
  );
  const bodyProps = { isOpen, commentHasFailedToSave };

  return (
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
          <ConversationFooterForStory isOpen={boundaryIsActive || isOpen} />
        </Conversation>
      )}
    </BoundaryClickWatcher>
  );
});
