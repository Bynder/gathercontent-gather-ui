import * as React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { text, withKnobs } from '@storybook/addon-knobs';
import { Layout, TopBar } from 'lib';
import { Sidebar } from './Sidebar';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const SidebarStory = storiesOf('Components', module).add('Sidebar', () => {
  const example = text('label', 'Filename.xyz', 'groupId');

  return (
    <StoryItem>
      <Layout>
        <Layout.Header>
          <TopBar>Header placeholder</TopBar>
        </Layout.Header>
        <Layout.Main>
          <Layout.OverlaySidebar isOpen>
            <Sidebar>
              <Sidebar.Header>{example}</Sidebar.Header>

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
                </Sidebar.Section>
              </Sidebar.Body>
            </Sidebar>
          </Layout.OverlaySidebar>
        </Layout.Main>
      </Layout>
    </StoryItem>
  );
});

export { SidebarStory };
