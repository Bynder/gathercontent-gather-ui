import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Layout } from '../../lib';

storiesOf('Components', module).add('Layout', () => {
  const isOpen = boolean('isOpen', false);

  return (
    <Layout>
      <Layout.Header className="bg-red-primary h-20 border-8 border-solid border-red-30">
        Header
      </Layout.Header>
      <Layout.Section className="h-full flex flex-row">
        <Layout.Main className="w-3/4">
          <Layout.SubHeader
            className="bg-blue-primary h-10 border-8 border-solid border-blue-30"
            animatableProperties={{ width: isOpen ? '75%' : '100%' }}
          >
            SubHeader
          </Layout.SubHeader>
          <Layout.Body className="bg-green-primary border-8 border-solid border-green-30">
            Body
          </Layout.Body>
          <Layout.Footer
            className="bg-yellow-primary h-10 border-8 border-solid border-yellow-30"
            animatableProperties={{ width: isOpen ? '75%' : '100%' }}
          >
            Footer
          </Layout.Footer>
          <Layout.OverlaySidebar className="top-0" isOpen={isOpen}>
            Overlay Sidebar
          </Layout.OverlaySidebar>
        </Layout.Main>
        <Layout.InlineSidebar className="w-1/4 bg-purple-primary border-8 border-solid border-purple-30">
          Inline Sidebar
        </Layout.InlineSidebar>
      </Layout.Section>
    </Layout>
  );
});
