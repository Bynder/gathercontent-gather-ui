import React from 'react';
import { array } from '@storybook/addon-knobs';
import StoryItem from '../../../stories/styleguide/StoryItem';
import { Select as SelectComponent } from '../Select';

export default {
  title: 'Legacy/Form/Inputs/Select',
  component: SelectComponent
};

export const Select = () => {
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
    <StoryItem title="SelectComponent">
      <SelectComponent options={options} />
    </StoryItem>
  );
};
