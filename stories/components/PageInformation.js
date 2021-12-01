import React from 'react';
import { action } from '@storybook/addon-actions';
import { EditableTextWrapper, PageInformation } from 'lib';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _PageInformation = () => (
  <div>
    <StoryItem
      title="Page information: Just a title"
      description="Includes a title as a minimum"
    >
      <PageInformation title="This is the title of the page" />
    </StoryItem>

    <StoryItem
      title="Page information: With Subtitle"
      description="Can be text, or another node"
    >
      <PageInformation
        title="This is the title of the page"
        subtitle="This is a text subtitle"
      />
      <PageInformation
        title="This is the title of the page"
        subtitle={
          <span>
            oOooh:{' '}
            <span className="page-information__subtitle--highlight">
              some highlighted text
            </span>
          </span>
        }
      />
    </StoryItem>

    <StoryItem title="Page information: wraps extremely long titles and subtitles">
      <PageInformation
        title="This title is really really really really really really really really long"
        subtitle="The subtitle just goes on and on and on and on and on and on and on and on"
      />
    </StoryItem>

    <StoryItem title="Page information: with an editable title">
      <PageInformation
        editable
        title="The original title"
        subtitle="This is the subtitle"
        rename={(name) => action('Title renamed to')(name)}
      />
    </StoryItem>
  </div>
);

_PageInformation.story = {
  name: 'PageInformation',
};
