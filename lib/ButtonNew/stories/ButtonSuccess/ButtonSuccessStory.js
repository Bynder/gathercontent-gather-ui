import React from 'react';
import { storiesOf } from '@storybook/react';
import { map } from 'lodash';
import { ButtonSuccess } from 'lib';
import { ButtonStoryItem } from '../ButtonStoryItem';
import StoryItem from '../../../../stories/styleguide/StoryItem';

storiesOf('Components/Buttons', module).add('ButtonSuccess', () => (
  <div>
    {map(ButtonSuccess.sizes, size => (
      <StoryItem
        key={size}
        title={`ButtonSuccess ${size.toUpperCase()}`}
        description={`The ${size.toUpperCase()} success button component`}
      >
        <div className="flex flex-wrap">
          <ButtonStoryItem title="Default">
            <ButtonSuccess size={size}>Button text</ButtonSuccess>
          </ButtonStoryItem>
        </div>
      </StoryItem>
    ))}
  </div>
));
