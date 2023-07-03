import React from "react";
import {
  ButtonIconDanger,
  ButtonIcon as ButtonIconComponent,
  ButtonIconContained,
  ButtonIconContainedDanger,
  Counter,
  ButtonIconBubble,
  ButtonIconDark,
  ButtonIconWhite,
} from "lib";
// @ts-expect-error TS(2307): Cannot find module 'stories/styleguide/StoryItem' ... Remove this comment to see the full error message
import StoryItem from "stories/styleguide/StoryItem";
import { ButtonStoryItem } from "../ButtonStoryItem";

const states = [{}, { active: true }, { enabled: true }, { disabled: true }];

export default {
  title: "GUI/Buttons/Button Icon",
  component: ButtonIconComponent,
};

export function ButtonIcon() {
  return <StoryItem
    title="ButtonIconComponent"
    description="The icon button component"
  >
    <div className="flex flex-wrap justify-around">
      <ButtonStoryItem title="Base (LG)">
        {states.map((s) => (
          <div className="h-16">
            <ButtonIconComponent
              name="book"
              size={ButtonIconComponent.sizes.lg}
              {...s}
            />
          </div>
        ))}
      </ButtonStoryItem>
      <ButtonStoryItem title="Base (MD)">
        {states.map((s) => (
          <div className="h-16">
            <ButtonIconComponent
              name="fullScreen"
              size={ButtonIconComponent.sizes.md}
              {...s}
            />
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Base (SM)">
        {states.map((s) => (
          <div className="h-16">
            <ButtonIconComponent
              name="caption16"
              size={ButtonIconComponent.sizes.sm}
              {...s}
            />
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Base (counter)">
        {states.map((s) => (
          <div className="h-16">
            {/* @ts-expect-error */}
            <ButtonIconComponent name="caption16" {...s}>
              <Counter>9</Counter>
            </ButtonIconComponent>
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Danger">
        {states.map((s) => (
          <div className="h-16">
            <ButtonIconDanger name="caption16" {...s} />
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Contained">
        {states.map((s) => (
          <div className="h-16">
            <ButtonIconContained name="caption16" {...s} />
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Contained Danger">
        {states.map((s) => (
          <div className="h-16">
            <ButtonIconContainedDanger name="caption16" {...s} />
          </div>
        ))}
      </ButtonStoryItem>

      <ButtonStoryItem title="Bubble">
        {states.map((s) => (
          <div className="h-16">
            <ButtonIconBubble name="newComment" {...s} />
          </div>
        ))}
      </ButtonStoryItem>

      {/* @ts-expect-error TS(2322): Type '{ children: Element[]; title: string; classN... Remove this comment to see the full error message */}
      <ButtonStoryItem title="Dark" className="bg-neutral-20 text-white">
        {states.map((s) => (
          <div className="h-16">
            <ButtonIconDark name="infoSquare" {...s} />
          </div>
        ))}
      </ButtonStoryItem>

      {/* @ts-expect-error TS(2322): Type '{ children: Element[]; title: string; classN... Remove this comment to see the full error message */}
      <ButtonStoryItem title="White" className="bg-neutral-20 text-white">
        {states.map((s) => (
          <div className="h-16">
            <ButtonIconWhite name="menuDotted" {...s} />
          </div>
        ))}
      </ButtonStoryItem>
    </div>
  </StoryItem>
}

ButtonIcon.parameters = {
  controls: { hideNoControlsWarning: true },
};
