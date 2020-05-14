import React from 'react';
import { storiesOf } from '@storybook/react';
import Pill from '../../lib/Pill';
import Icon from '../../lib/Icon';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Pill', () => (
  <div>
    <StoryItem title="Pill">
      <Pill>
          <Icon name="item" /> <span style={{paddingLeft: "10px"}}>Name is <b>David</b></span>
      </Pill>
    </StoryItem>
    <StoryItem title="Pill error">
      <Pill type="error">
          <Icon name="item" /> <span style={{paddingLeft: "10px"}}>Name is <b>David</b></span>
      </Pill>
    </StoryItem>
  </div>
));
