import React from 'react';
import { storiesOf, action } from '@storybook/react';
import FloatingButton from '../../lib/FloatingButton/';
import StoryItem from '../styleguide/StoryItem';

const position = {
  position: 'relative',
  top: '10px',
  left: '10px',
};

storiesOf('Components', module)
  .add('FloatingButton', () => {
    return (
      <div>
        <StoryItem
          title="FloatingButton"
          description="...">
          <div>
            <FloatingButton
              position={position}
              type="comment"
              onClickHandler={() => {}}
            />
          </div>
        </StoryItem>
      </div>
    );
  });
