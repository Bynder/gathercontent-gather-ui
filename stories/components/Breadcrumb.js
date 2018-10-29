import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumb, Icon } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module).add('Breadcrumb', () => (
  <div>
    <StoryItem
      title="Avatar – base"
      description="A base avatar will fall back to initials if no url prop is passed."
    >
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="/">
            <Icon name="home" />
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Icon name="chevronRight" />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/">Link 2</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Icon name="chevronRight" />
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="/">Link 3</a>
        </Breadcrumb.Item>
      </Breadcrumb>
    </StoryItem>
  </div>
));
