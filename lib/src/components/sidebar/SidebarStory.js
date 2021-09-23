import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonPrimary, ButtonTertiary, Icon } from 'lib';
import { Sidebar } from './Sidebar';

const ExampleOfUsingShowMoreToggle = () => {
  const { showMore } = React.useContext(Sidebar.SectionContext);

  return (
    showMore && (
      <>
        <Sidebar.SubSection>
          <Sidebar.SubHeading>
            <h4>Direction</h4>
          </Sidebar.SubHeading>
          Vertical
        </Sidebar.SubSection>
        <Sidebar.SubSection>
          <Sidebar.SubHeading>
            <h4>Aspect ratio</h4>
          </Sidebar.SubHeading>
          16:9
        </Sidebar.SubSection>
        <Sidebar.SubSection>
          <Sidebar.SubHeading>
            <h4>Direction</h4>
          </Sidebar.SubHeading>
          Vertical
        </Sidebar.SubSection>
        <Sidebar.SubSection>
          <Sidebar.SubHeading>
            <h4>Aspect ratio</h4>
          </Sidebar.SubHeading>
          16:9
        </Sidebar.SubSection>
        <Sidebar.SubSection>
          <Sidebar.SubHeading>
            <h4>Direction</h4>
          </Sidebar.SubHeading>
          Vertical
        </Sidebar.SubSection>
      </>
    )
  );
};

export const SidebarExample = () => (
  <Sidebar>
    <Sidebar.Header onClose={() => {}}>
      <h2>Sidebar header</h2>
    </Sidebar.Header>

    <Sidebar.Body>
      <Sidebar.Section>
        <Sidebar.SectionHead>
          <Sidebar.Heading>
            <h3>Meta</h3>
          </Sidebar.Heading>
        </Sidebar.SectionHead>

        <Sidebar.SubSection>
          <Sidebar.SubHeading>
            <h4>Alt text</h4>
          </Sidebar.SubHeading>
          Alt text value
        </Sidebar.SubSection>
      </Sidebar.Section>

      <Sidebar.Section>
        <Sidebar.SectionHead
          toggle={
            <Sidebar.SectionToggle hideText="Less info" showText="More info" />
          }
        >
          <Sidebar.Heading>
            <h4>Crop</h4>
          </Sidebar.Heading>
          <Sidebar.Description>
            Set width or height values in pixels, Aspect ratio is always
            honoured.
          </Sidebar.Description>
        </Sidebar.SectionHead>

        <Sidebar.SubSection>
          <Sidebar.SubHeading>
            <h4>Aspect ratio</h4>
          </Sidebar.SubHeading>
          16:9
        </Sidebar.SubSection>

        <Sidebar.SubSection>
          <Sidebar.SubHeading>
            <h4>Direction</h4>
          </Sidebar.SubHeading>
          Vertical
        </Sidebar.SubSection>

        <Sidebar.SubSection>
          <Sidebar.SubHeading>
            <h4>Aspect ratio</h4>
          </Sidebar.SubHeading>
          16:9
        </Sidebar.SubSection>

        <ExampleOfUsingShowMoreToggle />
      </Sidebar.Section>
    </Sidebar.Body>

    <Sidebar.Footer>
      <a href="/" className="mr-auto">
        <Icon name="help" />
      </a>
      <ButtonTertiary size="sm" onClick={() => {}} className="mr-2">
        Cancel
      </ButtonTertiary>
      <ButtonPrimary size="sm" onClick={() => {}}>
        Save
      </ButtonPrimary>
    </Sidebar.Footer>
  </Sidebar>
);

const SidebarStory = storiesOf('Components', module).add('Sidebar', () => (
  <SidebarExample />
));

export { SidebarStory };
