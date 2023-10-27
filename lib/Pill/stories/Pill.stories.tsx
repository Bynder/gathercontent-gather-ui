import React, { Fragment } from "react";
import { map } from "lodash";
import PillComponent from "../index";
import Icon from "../../Icon";
import StoryItem from "../../../stories/styleguide/StoryItem";

export default {
  title: "Legacy/Pill",
  component: PillComponent,
};

export function Pill() {
  return (
    <>
      {map(PillComponent.types, (value) => (
        <StoryItem title={`PillComponent ${value}`}>
          <div className="flex flex-row items-center">
            <PillComponent type={value}>
              <Icon name="item" />{" "}
              <span className="ml-3">
                Name is <b>David</b>
              </span>
            </PillComponent>

            <PillComponent
              type={value}
              size={PillComponent.sizes.xs}
              className="ml-4"
            >
              <span>
                Name is <b>David</b>
              </span>
            </PillComponent>

            <PillComponent
              type={value}
              size={PillComponent.sizes.xxs}
              className="ml-4"
            >
              BETA
            </PillComponent>
          </div>
        </StoryItem>
      ))}
    </>
  );
}

Pill.parameters = {
  controls: { hideNoControlsWarning: true },
};
