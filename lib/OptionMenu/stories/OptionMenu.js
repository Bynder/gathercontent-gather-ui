import React from 'react';
import { storiesOf } from '@storybook/react';
import { OptionMenu } from '../OptionMenu';
import StoryItem from '../../../stories/styleguide/StoryItem';

storiesOf('Components', module).add('OptionMenu', () => {
  const options = [
    {
      text: 'Paragraph',
      iconName: 'paragraph16',
      onClick: () => console.log('Clicked paragraph')
    },
    {
      text: 'Heading 1',
      iconName: 'h116',
      onClick: () => console.log('Clicked heading')
    },
    {
      text: 'Heading 2',
      iconName: 'h216',
      onClick: () => console.log('Clicked heading')
    },
    {
      text: 'Heading 3',
      iconName: 'h316',
      onClick: () => console.log('Clicked heading')
    },
    {
      text: 'Heading 4',
      iconName: 'h416',
      onClick: () => console.log('Clicked heading')
    },
    {
      text: 'Heading 5',
      iconName: 'h516',
      onClick: () => console.log('Clicked heading')
    },
    {
      text: 'Heading 6',
      iconName: 'h616',
      onClick: () => console.log('Clicked heading')
    },
    {
      text: 'Quote',
      iconName: 'blockQuote16',
      onClick: () => console.log('Clicked paragraph')
    }
  ];

  return (
    <StoryItem
      title="OptionMenu"
      description="OptionMenu component for displaying selectable options"
    >
      <OptionMenu options={options} />
    </StoryItem>
  );
});
