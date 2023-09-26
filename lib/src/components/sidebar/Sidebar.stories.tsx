import * as React from "react";
import { ButtonPrimary, ButtonTertiary, Icon } from "lib";
import { Sidebar as SidebarComponent } from "./Sidebar";

export default {
  title: "GUI/Sidebar",
  component: SidebarComponent,
};

function ExampleOfUsingShowMoreToggle() {
  const { showMore }: any = React.useContext(SidebarComponent.SectionContext);

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
}

export function Sidebar() {
  return (
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
}

Sidebar.parameters = {
  controls: { hideNoControlsWarning: true },
};
