import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { InventoryItem } from 'lib';
import StoryItem from 'stories/styleguide/StoryItem';

storiesOf('Components', module).add('InventoryItem', () => {
  const isDragging = boolean('isDragging', false);
  const isDragPreview = boolean('isDragPreview', false);

  return (
    <StoryItem title="InventoryItem" description="A regular old InventoryItem">
      <InventoryItem
        tooltipText="Text field"
        iconName="text"
        isDragging={isDragging}
        isDragPreview={isDragPreview}
        tooltipClassName="inline-block"
      />
    </StoryItem>
  );
});
