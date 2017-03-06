import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import ConfirmationModal from '../../lib/ConfirmationModal/';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Confirmation Modal', () => {
    return (
      <div>
      <StoryItem
        title="Confirmation Modal"
        description="A toggle component that can be used to toggle options on and off.">
        <ConfirmationModal
          show
          title="Are you sure?"
          message="That kittens are just as awesome as dogs?"
          submitText="Hell yes"
          cancelText="Meow no"
          type="primary"
        />
      </StoryItem>
      </div>
    );
  });
