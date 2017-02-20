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
        description="The primary action button for creation actitivites">
        <Button type="primary" value="Primary button" clickHandler={action('clicked')}></Button>
      </StoryItem>

      <StoryItem
        title="Secondary button"
        description="The secondary action button for secondary actions">
        <Button type="secondary" value="Secondary button" clickHandler={action('clicked')}></Button>
      </StoryItem>

      <StoryItem
        title="Button with link style"
        description="A button which looks like a regular link">
        <Button type="link" value="Link type" clickHandler={action('clicked')}></Button>
      </StoryItem>

      <StoryItem
        title="Loading button"
        description="A button that generates a spinner when pressed. It can be of any button type.">
        <ProgressButton clickHandler={action('clicked submit')} value="Click to load"/>
      </StoryItem>

      <StoryItem
        title="Danger button"
        description="A button that generates a dangerous action">
        <Button type="danger" value="Danger button" clickHandler={action('clicked')}></Button>
      </StoryItem>

      <StoryItem
        title="Buttons side by side"
        description="Side by side buttons">
        <div>
          <Button type="danger" value="Delete Items" clickHandler={action('clicked confirm')}></Button>
          <Button type="link" value="Cancel" clickHandler={action('clicked cancel')}></Button>
        </div>
      </StoryItem>
    </div>

  ));

  export default button;
