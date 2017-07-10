import React from 'react';
import { storiesOf, action } from '@storybook/react';
import FloatingButton from '../../lib/FloatingButton/';
import StoryItem from '../styleguide/StoryItem';

const position = {
  position: 'relative',
  top: '10px',
  left: '150px',
};

storiesOf('Components', module)
  .add('FloatingButton', () => {
    return (
      <div>
        <StoryItem
          title="Floating Button"
          description="A floating button defaults to the comment icon. It can, optionally, receive custom positioning properties.">
          <div>
            <FloatingButton
              type="comment"
              onClickHandler={action('I was clicked')}
            />
          </div>
        </StoryItem>

        <StoryItem
          title="Floating Button with custom placement"
          description="Passing a `position` object property, allows its position to be customised.">
          <div>
            <FloatingButton
              type="comment"
              position={position}
              onClickHandler={action('I was clicked')}
            />
          </div>
        </StoryItem>
      </div>
    );
  });
