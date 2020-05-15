import React from 'react';
import { storiesOf } from '@storybook/react';
import Pill from '../index';
import Icon from '../../Icon';
import StoryItem from '../../../stories/styleguide/StoryItem';

storiesOf('Components', module).add('Pill', () => (
  <div>
    <StoryItem title="Pill">
      <Pill>
        <Icon name="item" />{' '}
        <span style={{ paddingLeft: '10px' }}>
          Name is <b>David</b>
        </span>
      </Pill>
    </StoryItem>
    <StoryItem title="PillRed">
      <Pill type="red">
        <Icon name="item" />{' '}
        <span style={{ paddingLeft: '10px' }}>
          Name is <b>David</b>
        </span>
      </Pill>
    </StoryItem>
    <StoryItem title="PillGreen">
      <Pill type="green">NEW</Pill>
    </StoryItem>
  </div>
));
