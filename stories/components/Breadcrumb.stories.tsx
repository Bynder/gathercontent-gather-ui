import React from "react";
import { Dropdown, Breadcrumb as BreadcrumbComponent } from "lib";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: "Legacy/Breadcrumb",
};

export const Breadcrumb = () => (
  <div>
    <StoryItem title="BreadcrumbComponent">
      <BreadcrumbComponent>
        <BreadcrumbComponent.Item>
          <div className="text-overflow-ellipsis" title="Energy Co. Redesign">
            Energy Co. Redesign
          </div>
        </BreadcrumbComponent.Item>
      </BreadcrumbComponent>
    </StoryItem>

    <StoryItem title="BreadcrumbComponent">
      <BreadcrumbComponent>
        {/* @ts-expect-error */}
        <BreadcrumbComponent.Item style={{ maxWidth: "20%" }}>
          <div className="text-overflow-ellipsis" title="Energy Co. Redesign">
            <a href="/">Energy Co. Redesign</a>
          </div>
        </BreadcrumbComponent.Item>
        {/* @ts-expect-error */}
        <BreadcrumbComponent.Item style={{ maxWidth: "20%" }}>
          <div className="text-overflow-ellipsis" title="About">
            <a href="/">About</a>
          </div>
        </BreadcrumbComponent.Item>
        {/* @ts-expect-error */}
        <BreadcrumbComponent.Item style={{ maxWidth: "50%" }}>
          <div className="text-overflow-ellipsis" title="History">
            History
          </div>
        </BreadcrumbComponent.Item>
      </BreadcrumbComponent>
    </StoryItem>

    <StoryItem title="BreadcrumbComponent">
      <BreadcrumbComponent>
        <BreadcrumbComponent.Item>
          <Dropdown id="1">
            <Dropdown.Trigger>...</Dropdown.Trigger>
            <Dropdown.Content collapse>
              <Dropdown.ActionGroup>
                <a
                  href="/"
                  className="dropdown__action"
                  title="Energy Co. Redesign"
                >
                  Energy Co. Redesign
                </a>
              </Dropdown.ActionGroup>
            </Dropdown.Content>
          </Dropdown>
        </BreadcrumbComponent.Item>
        <BreadcrumbComponent.Item>
          <div className="text-overflow-ellipsis">
            <a href="/" title="About">
              About
            </a>
          </div>
        </BreadcrumbComponent.Item>
        <BreadcrumbComponent.Item>
          <div className="text-overflow-ellipsis" title="History">
            History
          </div>
        </BreadcrumbComponent.Item>
      </BreadcrumbComponent>
    </StoryItem>
  </div>
);

Breadcrumb.parameters = {
  controls: { hideNoControlsWarning: true },
};
