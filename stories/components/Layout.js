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
      <Layout.Main>
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
        <Layout.Sidebar className="top-0" isOpen={isOpen}>
          Sidebar
        </Layout.Sidebar>
      </Layout.Main>
    </Layout>
  );
});
