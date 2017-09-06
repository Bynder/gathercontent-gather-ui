import React from 'react';
import { storiesOf, action } from '@storybook/react';
import RadioButtonGroup from '../../lib/Form/RadioButton/Group';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('Radio Buttons', () => (
    <StoryItem
      title="Radio buttons group"
      description="Groups of radio buttons"
    >
      <RadioButtonGroup
        choices={[{
          label: 'Title 1',
          id: 'group-1',
          name: 'group-choice',
          subtitle: 'Subtitle',
        }, {
          label: 'Title 2',
          id: 'group-2',
          name: 'group-choice',
          subtitle: 'Subtitle',
          checked: true,
        }, {
          label: 'Title 3',
          id: 'group-3',
          name: 'group-choice',
          subtitle: 'Subtitle',
        }]}
        onChangeHandler={selected => action('new selected')(selected)}
      />
    </StoryItem>
  ));
