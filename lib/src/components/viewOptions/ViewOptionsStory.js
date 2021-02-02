import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryItem from 'stories/styleguide/StoryItem';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ViewOptions } from './ViewOptions';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const modalStory = storiesOf('Components', module).add('View Options', () => {
  return (
    <StoryItem>
      <ViewOptions
        actions={() => {}}
        onClearSearchHandler={action('Cleared Search')}
        onSortChange={action(`Sorting Changed`)}
        onViewChange={action(`View Changed`)}
        sortingValues={[
          {
            name: 'Name',
            key: 'name'
          },
          {
            name: 'Uploaded By',
            key: 'uploadedBy'
          }
        ]}
      />
    </StoryItem>
  );
});

export default modalStory;
