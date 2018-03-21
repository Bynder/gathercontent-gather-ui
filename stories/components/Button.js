import React from 'react';
import { storiesOf, action } from '@storybook/react';
import Button from '../../lib/Button/';
import ButtonWithTooltip from '../../lib/Button/ButtonWithTooltip';
import ProgressButton from '../../lib/ProgressButton';
import Icon from '../../lib/Icon';
import StoryItem from '../styleguide/StoryItem';

const button = storiesOf('Components', module)
  .add('Buttons', () => (
    <div>
      <StoryItem
        title="Primary button"
        description="The primary action button for creation activities"
      >
        <Button types={['primary']} clickHandler={action('clickedHandler')}>Primary button</Button>
      </StoryItem>

      <StoryItem
        title="Button with link style"
        description="A button which looks like a regular link"
      >
        <Button types={['link']} clickHandler={action('clickedHandler')}>Link type</Button>
      </StoryItem>

      <StoryItem
        title="Button with link danger style"
        description="A button which looks like a regular link"
      >
        <Button types={['link-danger']} clickHandler={action('clickedHandler')}>Link type</Button>
      </StoryItem>

      <StoryItem
        title="Outline button"
        description="A button with an outline style"
      >
        <Button types={['outline']} clickHandler={action('clickedHandler')}>Outline button</Button>
      </StoryItem>

      <StoryItem
        title="Loading button"
        description="A button that generates a spinner when pressed. It is of type `button` by default but can also be a `submit` button by setting the `isSubmit` prop to `true`."
      >
        <ProgressButton
          clickHandler={action('clickedHandler')}
          value="Click to load"
        />
      </StoryItem>

      <StoryItem
        title="Danger button"
        description="A button that generates a dangerous action"
      >
        <Button types={['danger']} clickHandler={action('clickedHandler')}>Danger button</Button>
      </StoryItem>

      <StoryItem
        title="Misc buttons (light and dark)"
        description="Buttons that looks like they performs a secondary action."
      >
        <Button types={['light-grey']} clickHandler={action('clickedHandler')}>Import</Button>
        <Button types={['dark-grey']} clickHandler={action('clickedHandler')}>Export</Button>
      </StoryItem>

      <StoryItem
        title="Buttons side by side"
        description="Spacing is added when you add multiple Buttons side by side."
      >
        <Button types={['danger']} clickHandler={action('clickedHandler')}>Delete Items</Button>
        <Button types={['link']} clickHandler={action('clickedHandler')}>Cancel</Button>
      </StoryItem>

      <StoryItem
        title="Button with a tooltip"
        description="Buttons can includes tooltips to provide context to the user."
      >
        <ButtonWithTooltip
          types={['light-grey']}
          clickHandler={action('clickedHandler')}
          tooltipText="You may reverse this action at a later date"
          tooltipSize="large"
          tooltipPosition="right"
        >
          Archive Item
        </ButtonWithTooltip>
      </StoryItem>

      <StoryItem
        title="Icon Only Content"
        description="A Button can use more than just text as content."
      >
        <Button
          types={['icon-only']}
          clickHandler={action('I was clicked')}
        >
          <Icon
            name="comment"
            text="add comment"
            hideText
          />
        </Button>
      </StoryItem>

      <StoryItem
        title="Icon Contents & Contained"
        description="Icon contents go well with a border when they're interactive."
      >
        <Button
          types={['icon-only', 'contained']}
          clickHandler={action('I was clicked')}
        >
          <Icon
            name="comment"
            text="add comment"
            hideText
          />
        </Button>
      </StoryItem>

      <StoryItem
        title="Enhanced Hover Interaction"
        description="Buttons can have an enhanced hover interaction."
      >
        <Button
          types={['primary', 'hover-transform']}
          clickHandler={action('I was clicked')}
        >
          Hover me
        </Button>
      </StoryItem>
    </div>
  ));

export default button;
