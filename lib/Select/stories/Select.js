import React from 'react';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { Select } from '../Select';

storiesOf('Components', module).add('Select', () => {
  const optionLabels = array('Option Labels', [
    'I like it, I am just not ready',
    'I do not like the new toolbar',
    'It is too buggy'
  ]);

  const options = optionLabels.map(label => ({
    label,
    value: label.replace(/\s/g, '_').toLowerCase()
  }));

  return (
    <StoryItem title="Select">
      <Select options={options} />
    </StoryItem>
  );
});
