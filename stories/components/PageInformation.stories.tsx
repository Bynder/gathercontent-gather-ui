import React from "react";
import { PageInformation as PageInformationComponent } from "lib";
import StoryItem from "../styleguide/StoryItem";

export default {
  title: "Legacy/Page Information",
  component: PageInformationComponent,
  argTypes: {
    textChanged: { action: "Text has been changed" },
  },
};

export const PageInformation = (args: any) => (
  <div>
    <StoryItem
      title="Page information: Just a title"
      description="Includes a title as a minimum"
    >
      <PageInformationComponent title="This is the title of the page" />
    </StoryItem>

    <StoryItem
      title="Page information: With Subtitle"
      description="Can be text, or another node"
    >
      <PageInformationComponent
        title="This is the title of the page"
        subtitle="This is a text subtitle"
      />
      <PageInformationComponent
        title="This is the title of the page"
        subtitle={
          <span>
            oOooh:{" "}
            <span className="gui-page-information__subtitle--highlight">
              some highlighted text
            </span>
          </span>
        }
      />
    </StoryItem>

    <StoryItem title="Page information: wraps extremely long titles and subtitles">
      <PageInformationComponent
        title="This title is really really really really really really really really long"
        subtitle="The subtitle just goes on and on and on and on and on and on and on and on"
      />
    </StoryItem>

    <StoryItem title="Page information: with an editable title">
      <PageInformationComponent
        editable
        title="The original title"
        subtitle="This is the subtitle"
        rename={args.textChanged}
      />
    </StoryItem>
  </div>
);

PageInformation.parameters = {
  controls: { hideNoControlsWarning: true },
};
