import React from "react";
import { ButtonSecondary, Card as CardComponent } from "lib";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";

export default {
  title: "GUI/Cards/Card",
  component: CardComponent,
  args: {
    interactive: false,
    selected: false,
    highlighted: false,
    added: false,
    removed: false,
    active: false,
  },
  argTypes: {
    size: {
      name: "Size",
      options: ["sm", "md"],
      control: { type: "radio" },
    },
  },
};

export function Card(args: any) {
  const onClick = args.interactive ? () => {} : null;

  return (
    <StoryItem>
      <CardComponent {...args} onClick={onClick}>
        <CardComponent.Content>
          <CardComponent.Title>Create the first template</CardComponent.Title>
          <CardComponent.Description>
            Content templates make it easy for people to provide any type of
            content in the correct format, and style. Whether it’s blog
            articles, website pages or email newsletter content.
          </CardComponent.Description>
          <CardComponent.Footer>
            <ButtonSecondary>Create a template</ButtonSecondary>
          </CardComponent.Footer>
        </CardComponent.Content>
      </CardComponent>
    </StoryItem>
  );
}
