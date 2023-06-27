import * as React from "react";
// @ts-expect-error TS(2307): Cannot find module 'lib' or its corresponding type... Remove this comment to see the full error message
import { ButtonPrimary, ButtonTertiary, Icon } from "lib";
import { Sidebar as SidebarComponent } from "./Sidebar";

export default {
  title: "GUI/Sidebar",
  component: SidebarComponent,
};

const ExampleOfUsingShowMoreToggle = () => {
  const { showMore } = React.useContext(SidebarComponent.SectionContext);

  return (
    showMore && (
      <>
        <SidebarComponent.SubSection>
          <SidebarComponent.SubHeading>
            <h4>Direction</h4>
          </SidebarComponent.SubHeading>
          Vertical
        </SidebarComponent.SubSection>
        <SidebarComponent.SubSection>
          <SidebarComponent.SubHeading>
            <h4>Aspect ratio</h4>
          </SidebarComponent.SubHeading>
          16:9
        </SidebarComponent.SubSection>
        <SidebarComponent.SubSection>
          <SidebarComponent.SubHeading>
            <h4>Direction</h4>
          </SidebarComponent.SubHeading>
          Vertical
        </SidebarComponent.SubSection>
        <SidebarComponent.SubSection>
          <SidebarComponent.SubHeading>
            <h4>Aspect ratio</h4>
          </SidebarComponent.SubHeading>
          16:9
        </SidebarComponent.SubSection>
        <SidebarComponent.SubSection>
          <SidebarComponent.SubHeading>
            <h4>Direction</h4>
          </SidebarComponent.SubHeading>
          Vertical
        </SidebarComponent.SubSection>
      </>
    )
  );
};

export const Sidebar = () => (
  <SidebarComponent>
    <SidebarComponent.Header onClose={() => {}}>
      <h2>SidebarComponent header</h2>
    </SidebarComponent.Header>

    <SidebarComponent.Body>
      <SidebarComponent.Section>
        <SidebarComponent.SectionHead>
          <SidebarComponent.Heading>
            <h3>Meta</h3>
          </SidebarComponent.Heading>
        </SidebarComponent.SectionHead>

        <SidebarComponent.SubSection>
          <SidebarComponent.SubHeading>
            <h4>Alt text</h4>
          </SidebarComponent.SubHeading>
          Alt text value
        </SidebarComponent.SubSection>
      </SidebarComponent.Section>

      <SidebarComponent.Section>
        {/* @ts-expect-error TS(2322): Type '{ children: Element[]; toggle: Element; }' i... Remove this comment to see the full error message */}
        <SidebarComponent.SectionHead
          toggle={
            <SidebarComponent.SectionToggle
              hideText="Less info"
              showText="More info"
            />
          }
        >
          <SidebarComponent.Heading>
            <h4>Crop</h4>
          </SidebarComponent.Heading>
          <SidebarComponent.Description>
            Set width or height values in pixels, Aspect ratio is always
            honoured.
          </SidebarComponent.Description>
        </SidebarComponent.SectionHead>

        <SidebarComponent.SubSection>
          <SidebarComponent.SubHeading>
            <h4>Aspect ratio</h4>
          </SidebarComponent.SubHeading>
          16:9
        </SidebarComponent.SubSection>

        <SidebarComponent.SubSection>
          <SidebarComponent.SubHeading>
            <h4>Direction</h4>
          </SidebarComponent.SubHeading>
          Vertical
        </SidebarComponent.SubSection>

        <SidebarComponent.SubSection>
          <SidebarComponent.SubHeading>
            <h4>Aspect ratio</h4>
          </SidebarComponent.SubHeading>
          16:9
        </SidebarComponent.SubSection>

        <ExampleOfUsingShowMoreToggle />
      </SidebarComponent.Section>
    </SidebarComponent.Body>

    <SidebarComponent.Footer>
      <a href="/" className="mr-auto">
        <Icon name="help" />
      </a>
      <ButtonTertiary size="sm" onClick={() => {}} className="mr-2">
        Cancel
      </ButtonTertiary>
      <ButtonPrimary size="sm" onClick={() => {}}>
        Save
      </ButtonPrimary>
    </SidebarComponent.Footer>
  </SidebarComponent>
);

Sidebar.parameters = {
  controls: { hideNoControlsWarning: true },
};
