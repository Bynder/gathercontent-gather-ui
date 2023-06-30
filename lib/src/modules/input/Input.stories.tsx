import * as React from "react";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";
import { Input, InputIcon, Label } from "lib";
import { InputWithMentions } from "./InputWithMentions";

export default {
  title: "GUI/Form/Inputs/Inputs",
  component: Input,
  args: {
    value: "",
    disabled: false,
    invalid: false,
    valid: false,
    enhanceNativeSupport: false,
    required: false,
    type: "text",
    size: "md",
  },
  argTypes: {
    type: {
      name: "Type",
      control: { type: "radio" },
      options: ["text", "email", "password", "number"],
    },
    size: {
      name: "Size",
      control: { type: "radio" },
      options: ["md", "sm"],
    },
  },
};

export const Inputs = (args: any) => {
  const mockUsers = [
    {
      id: 2,
      name: "Bruce",
      avatar:
        "https://gathercontent-production-avatars.s3-us-west-2.amazonaws.com/208205_yHGd7vA5HRxsnMQpES4UzjJ7Yxgn6Bp54165gqksRXyDJhuOnW88H6djhLJeE2BZ.jpg",
      initials: "BB",
      display: "brucebanner",
      email: "bruce@bruce.com",
    },
    {
      id: "saul",
      display: "saulgoodman",
      name: "Saul Goodman",
      initials: "SG",
      email: "heythere@lol.com",
    },
    {
      id: "456",
      display: "jessepinkman",
      name: "Jesse Pinkman",
      email: "heythere@lol.com",
      initials: "JP",
      url: "https://d3iw72m71ie81c.cloudfront.net/2eae47ef-6f37-46fe-a02b-52cff401a8f9-me.jpg",
    },
  ];

  return (
    <>
      <StoryItem title="Input">
        {/* @ts-expect-error */}
        <Label htmlFor="input-1">Label</Label>
        <Input id="input-1" placeholder="Describe this input..." {...args} />
      </StoryItem>

      <StoryItem title="Input (with an icon)">
        {/* @ts-expect-error */}
        <Label htmlFor="input-2">Label</Label>
        <InputIcon
          id="input-2"
          placeholder="Describe this input..."
          iconName="search"
          {...args}
        />
      </StoryItem>

      <StoryItem title="Input (with mentions)">
        {/* @ts-expect-error */}
        <Label htmlFor="input-3">Label</Label>
        <InputWithMentions
          users={mockUsers}
          onChange={() => {}}
          onMention={() => {}}
          id="input-3"
          placeholder="@mention your team"
          value=""
          {...args}
        />
      </StoryItem>
    </>
  );
};
