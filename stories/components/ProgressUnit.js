import React from 'react';
import { action } from '@storybook/addon-actions';
import Progress from '../../lib/Progress/';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const BarAndUnit = () => (
  <StoryItem
    title="Progress Units"
    description="Progress bars with percentages to display progress for workflow statuses."
  >
    <Progress.Bar>
      <Progress.Unit
        className="progress-unit--test"
        percent={70}
        color="rgba(100,250,125,1)"
        name="Unit 1"
        filterLink="#test"
      />
      <Progress.Unit
        className="progress-unit--test"
        percent={30}
        name="Unit 2"
        filterLink="#test"
      />
    </Progress.Bar>
  </StoryItem>
);

BarAndUnit.story = {
  name: 'Bar and Unit',
};
