import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../../lib/Button/';
import ProgressButton from '../../lib/ProgressButton';
import StoryItem from '../styleguide/StoryItem';

const button = storiesOf('Components', module)
  .add('Buttons', () => (
    <div>
      <StoryItem
        title="Primary button"
        description="The primary action button for creation activities"
      >
        <Button types={['primary']} clickHandler={action('clicked')}>Primary button</Button>
      </StoryItem>

      <StoryItem
        title="Secondary button"
        description="The secondary action button for secondary actions"
      >
        <Button types={['secondary']} clickHandler={action('clicked')}>Secondary button</Button>
      </StoryItem>

      <StoryItem
        title="Button with link style"
        description="A button which looks like a regular link"
      >
        <Button types={['link']} clickHandler={action('clicked')}>Link type</Button>
      </StoryItem>

      <StoryItem
        title="Loading button"
        description="A button that generates a spinner when pressed. It can be of any button type."
      >
        <ProgressButton clickHandler={action('clicked submit')} value="Click to load"/>
      </StoryItem>

      <StoryItem
        title="Danger button"
        description="A button that generates a dangerous action"
      >
        <Button types={['danger']} clickHandler={action('clicked')}>Danger button</Button>
      </StoryItem>

      <StoryItem
        title="Buttons side by side"
        description="Side by side buttons"
      >
        <Button types={['danger']} clickHandler={action('clicked confirm')}>Delete Items</Button>
        <Button types={['link']} clickHandler={action('clicked cancel')}>Cancel</Button>
      </StoryItem>
    </div>
  ));

export default button;
