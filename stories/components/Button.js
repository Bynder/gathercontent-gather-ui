import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from '../../lib/Button';
import ButtonWithIcon from '../../lib/Button/ButtonWithIcon';
import ProgressButton from '../../lib/ProgressButton';
import Icon from '../../lib/Icon';
import StoryItem from '../styleguide/StoryItem';
import Dropdown from '../../lib/Dropdown';

const button = storiesOf('Components', module).add('Buttons', () => (
  <div>
    <StoryItem
      title="Primary button"
      description="The primary action button for creation activities"
    >
      <Button types={['primary']} clickHandler={action('clickedHandler')}>
        Primary button
      </Button>
    </StoryItem>

    <StoryItem
      title="Button with link style"
      description="A button which looks like a regular link"
    >
      <Button types={['link']} clickHandler={action('clickedHandler')}>
        Link type
      </Button>
    </StoryItem>

    <StoryItem
      title="Button with link danger style"
      description="A button which looks like a regular link"
    >
      <Button types={['link-danger']} clickHandler={action('clickedHandler')}>
        Link type
      </Button>
    </StoryItem>

    <StoryItem
      title="Outline button"
      description="A button with an outline style"
    >
      <Button types={['outline']} clickHandler={action('clickedHandler')}>
        Outline button
      </Button>
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
      description="loading buttons can use button types and display text when the spinner is active"
    >
      <ProgressButton
        clickHandler={action('clickedHandler')}
        value="Click to load"
        buttonType="outline-default"
        spinnerText="I'm loading!"
      />
    </StoryItem>

    <StoryItem
      title="Danger button"
      description="A button that generates a dangerous action"
    >
      <Button types={['danger']} clickHandler={action('clickedHandler')}>
        Danger button
      </Button>
    </StoryItem>

    <StoryItem
      title="Misc buttons (light and dark)"
      description="Buttons that looks like they performs a secondary action."
    >
      <Button types={['light-grey']} clickHandler={action('clickedHandler')}>
        Import
      </Button>
      <Button types={['dark-grey']} clickHandler={action('clickedHandler')}>
        Export
      </Button>
    </StoryItem>

    <StoryItem
      title="Buttons side by side"
      description="Spacing is added when you add multiple Buttons side by side."
    >
      <Button types={['danger']} clickHandler={action('clickedHandler')}>
        Delete Items
      </Button>
      <Button types={['link']} clickHandler={action('clickedHandler')}>
        Cancel
      </Button>
    </StoryItem>

    <StoryItem
      title="Icon Only Content"
      description="A Button can use more than just text as content."
    >
      <Button types={['icon-only']} clickHandler={action('I was clicked')}>
        <Icon name="comment" text="add comment" hideText />
      </Button>
    </StoryItem>

    <StoryItem
      title="Danger button, Icon only"
      description="A button with an icon and a red background"
    >
      <Button
        types={['danger', 'icon-only']}
        clickHandler={action('clickedHandler')}
      >
        <Icon name="clock" />
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
        <Icon name="comment" text="add comment" hideText />
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
    <StoryItem title="Button with icon">
      <ButtonWithIcon
        mainClickHandler={action('I was clicked')}
        iconClickHandler={action('Icon was clicked')}
        iconName="bell"
      >
        hello!
      </ButtonWithIcon>
    </StoryItem>

    <StoryItem title="Button with icon (small)">
      <ButtonWithIcon
        mainClickHandler={action('I was clicked')}
        iconClickHandler={action('Icon was clicked')}
        iconName="commentFill"
        sizeSm
      >
        I'm tiny!
      </ButtonWithIcon>
    </StoryItem>

    <StoryItem title="Button with icon (dropdown)">
      <ButtonWithIcon
        mainClickHandler={action('I was clicked')}
        iconName="down"
        dropdownContent={
          <Dropdown.Content collapse right>
            <Dropdown.Action action={() => action('action clicked')}>
              Do this
            </Dropdown.Action>
            <Dropdown.Action action={() => action('action clicked')}>
              or this!
            </Dropdown.Action>
          </Dropdown.Content>
        }
      >
        hello!
      </ButtonWithIcon>
    </StoryItem>

    <StoryItem
      title="Button with an id"
      description="Set the id prop, so can be accessed by a label"
    >
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="my-button">This is a label for #my-button</label>
      <Button
        id="my-button"
        types={['icon-only', 'contained']}
        clickHandler={action('I was clicked')}
        aria-label="My accessible button"
      >
        <Icon name="comment" text="add comment" hideText />
      </Button>
    </StoryItem>
  </div>
));

export default button;
