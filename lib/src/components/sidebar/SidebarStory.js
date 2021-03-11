import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonPrimary, ButtonTertiary } from 'lib';
import { Sidebar } from './Sidebar';

const ExampleOfUsingShowMoreToggle = () => {
  const { showMore } = React.useContext(Sidebar.SectionContext);

  return (
    showMore && (
      <>
        <Sidebar.SubHeading>Direction</Sidebar.SubHeading>
        Vertical
        <Sidebar.SubHeading>Aspect ratio</Sidebar.SubHeading>
        16:9
        <Sidebar.SubHeading>Direction</Sidebar.SubHeading>
        Vertical
        <Sidebar.SubHeading>Aspect ratio</Sidebar.SubHeading>
        16:9
        <Sidebar.SubHeading>Direction</Sidebar.SubHeading>
        Vertical
      </>
    )
  );
};

export const SidebarExample = () => (
  <Sidebar>
    <Sidebar.Header>Sidebar header</Sidebar.Header>

    <Sidebar.Body>
      <Sidebar.Section>
        <Sidebar.Heading>Meta</Sidebar.Heading>
        <Sidebar.SubHeading>Alt text</Sidebar.SubHeading>
        Alt text value
      </Sidebar.Section>

      <Sidebar.Section>
        <Sidebar.Heading showMoreToggle>Crop</Sidebar.Heading>
        <Sidebar.SubHeading>Aspect ratio</Sidebar.SubHeading>
        16:9
        <Sidebar.SubHeading>Direction</Sidebar.SubHeading>
        Vertical
        <Sidebar.SubHeading>Aspect ratio</Sidebar.SubHeading>
        16:9
        <ExampleOfUsingShowMoreToggle />
      </Sidebar.Section>
    </Sidebar.Body>

    <Sidebar.Footer>
      <ButtonTertiary size="sm" onClick={() => {}}>
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
