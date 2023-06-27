import React from 'react';
import ButtonComponent from '../../lib/Button';
import ProgressButton from '../../lib/ProgressButton';
import Icon from '../../lib/Icon';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Legacy/Button',
  component: ButtonComponent,
  argTypes: {
    clickHandler: { action: 'You clicked a button!' }
  }
};

export const Button = (args: any) => <>
  <StoryItem
    title="Primary button"
    description="The primary action button for creation activities"
  >
    <ButtonComponent types={['primary']} clickHandler={args.clickHander}>
      Primary button
    </ButtonComponent>
  </StoryItem>

  <StoryItem
    title="ButtonComponent with link style"
    description="A button which looks like a regular link"
  >
    <ButtonComponent types={['link']} clickHandler={args.clickHander}>
      Link type
    </ButtonComponent>
  </StoryItem>

  <StoryItem
    title="ButtonComponent with link danger style"
    description="A button which looks like a regular link"
  >
    <ButtonComponent types={['link-danger']} clickHandler={args.clickHander}>
      Link type
    </ButtonComponent>
  </StoryItem>

  <StoryItem
    title="Outline button"
    description="A button with an outline style"
  >
    <ButtonComponent types={['outline']} clickHandler={args.clickHander}>
      Outline button
    </ButtonComponent>
  </StoryItem>

  <StoryItem
    title="Loading button"
    description="A button that generates a spinner when pressed. It is of type `button` by default but can also be a `submit` button by setting the `isSubmit` prop to `true`."
  >
    <ProgressButton clickHandler={args.clickHander} value="Click to load" />
  </StoryItem>

  <StoryItem description="loading buttons can use button types and display text when the spinner is active">
    <ProgressButton
      clickHandler={args.clickHander}
      value="Click to load"
      buttonType="outline-default"
      spinnerText="I'm loading!"
    />
  </StoryItem>

  <StoryItem
    title="Danger button"
    description="A button that generates a dangerous action"
  >
    <ButtonComponent types={['danger']} clickHandler={args.clickHander}>
      Danger button
    </ButtonComponent>
  </StoryItem>

  <StoryItem
    title="Misc buttons (light and dark)"
    description="Buttons that looks like they performs a secondary action."
  >
    <ButtonComponent types={['light-grey']} clickHandler={args.clickHander}>
      Import
    </ButtonComponent>
    <ButtonComponent types={['dark-grey']} clickHandler={args.clickHander}>
      Export
    </ButtonComponent>
  </StoryItem>

  <StoryItem
    title="Buttons side by side"
    description="Spacing is added when you add multiple Buttons side by side."
  >
    <ButtonComponent types={['danger']} clickHandler={args.clickHander}>
      Delete Items
    </ButtonComponent>
    <ButtonComponent types={['link']} clickHandler={args.clickHander}>
      Cancel
    </ButtonComponent>
  </StoryItem>

  <StoryItem
    title="Icon Only Content"
    description="A ButtonComponent can use more than just text as content."
  >
    <ButtonComponent types={['icon-only']} clickHandler={args.clickHander}>
      <Icon name="comment" text="add comment" hideText />
    </ButtonComponent>
  </StoryItem>

  <StoryItem
    title="Danger button, Icon only"
    description="A button with an icon and a red background"
  >
    <ButtonComponent
      types={['danger', 'icon-only']}
      clickHandler={args.clickHander}
    >
      <Icon name="clock" />
    </ButtonComponent>
  </StoryItem>

  <StoryItem
    title="Icon Contents & Contained"
    description="Icon contents go well with a border when they're interactive."
  >
    <ButtonComponent
      types={['icon-only', 'contained']}
      clickHandler={args.clickHander}
    >
      <Icon name="comment" text="add comment" hideText />
    </ButtonComponent>
  </StoryItem>

  <StoryItem
    title="Enhanced Hover Interaction"
    description="Buttons can have an enhanced hover interaction."
  >
    <ButtonComponent
      types={['primary', 'hover-transform']}
      clickHandler={args.clickHander}
    >
      Hover me
    </ButtonComponent>
  </StoryItem>

  <StoryItem
    title="ButtonComponent with an id"
    description="Set the id prop, so can be accessed by a label"
  >
    {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
    <label htmlFor="my-button">This is a label for #my-button</label>
    <ButtonComponent
      id="my-button"
      types={['icon-only', 'contained']}
      clickHandler={args.clickHander}
      aria-label="My accessible button"
    >
      <Icon name="comment" text="add comment" hideText />
    </ButtonComponent>
  </StoryItem>
</>;
