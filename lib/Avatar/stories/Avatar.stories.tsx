import React from "react";
// @ts-expect-error TS(7016): Could not find a declaration file for module 'fake... Remove this comment to see the full error message
import faker from "faker";
import {
  Avatar as AvatarComponent,
  AvatarInformation,
  AvatarWithPopover,
  Button,
  ParticipantInfo,
} from "../../index";
import StoryItem from "../../../stories/styleguide/StoryItem";
import { AvatarGroupMock } from "./AvatarGroupMock";

export default {
  title: "Legacy/Avatar",
  component: AvatarComponent,
  args: {
    name: faker.name.findName(),
    email: faker.internet.email(),
    colour: faker.commerce.color(),
    isHighlighted: false,
    showImage: false,
    smallSize: false,
    bordered: false,
    locked: false,
    stacked: true,
    animate: true,
    onRemove: () => {},
  },
  argTypes: {
    colour: {
      name: "Colour",
      control: { type: "color" },
    },
  },
};

export function Avatar(args: any) {
  const avatarUrl = args.url;

  const props = {
    ...args,
    initials: args.name.substring(0, 2),
    url: args.showImage ? avatarUrl : null,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { colour, ...propsWithoutColour } = props;

  return (
    <div>
      <StoryItem
        title="AvatarComponent"
        description="A component for rendering a miniature profile of a user."
      >
        <AvatarComponent {...props} />
      </StoryItem>

      <StoryItem
        title="AvatarComponent (with popover)"
        description="An avatar can show a tooltip on hover."
      >
        <div className="gui-h-display-flex">
          <AvatarWithPopover {...props}>
            <ParticipantInfo name={props.name} email={props.email} />
          </AvatarWithPopover>
        </div>
      </StoryItem>

      <StoryItem
        title="AvatarComponent (with inline information)"
        description="An avatar can display the users name & email inline. It also supports additional nodes."
      >
        <AvatarComponent
          {...props}
          additional={
            <Button types={["link-danger", "size-sm"]} clickHandler={() => {}}>
              Link type
            </Button>
          }
        >
          <AvatarInformation name={props.name} email={props.email} />
        </AvatarComponent>
      </StoryItem>

      <StoryItem
        title="AvatarComponent (with inline information) who is pending"
        description="An avatar can display the users name & email inline and displays if they are pending"
      >
        <AvatarComponent
          {...props}
          additional={
            <Button types={["link-danger", "size-sm"]} clickHandler={() => {}}>
              Link type
            </Button>
          }
        >
          <AvatarInformation name={props.name} email={props.email} pending />
        </AvatarComponent>
      </StoryItem>

      <StoryItem
        title="AvatarComponent (with popover) who is pending"
        description="An avatar can show a tooltip on hover that also shows pending status."
      >
        <div className="gui-h-display-flex">
          <AvatarWithPopover {...props} pending>
            <ParticipantInfo name={props.name} email={props.email} pending />
          </AvatarWithPopover>
        </div>
      </StoryItem>

      <StoryItem
        title="AvatarComponent Groups"
        description="An avatar group has a toggle to show extra users."
      >
        <AvatarGroupMock
          defaultCount={6}
          minCount={6}
          avatarProps={propsWithoutColour}
          avatarGroupProps={{ stacked: args.stacked }}
        >
          {({ ui }: any) => ui}
        </AvatarGroupMock>
      </StoryItem>
    </div>
  );
}
