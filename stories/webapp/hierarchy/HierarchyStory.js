import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { HierarchyFolderRow } from './HierarchyFolderRow';
import { HierarchyCollection } from './HierarchyCollection';

const stories = storiesOf('Web app', module);
stories.addDecorator(withKnobs);

stories.add('Hierarchy', () => {
  const openFolders = boolean('Open all folders by default', true);

  return (
    <div>
      <HierarchyFolderRow childCount={0} open={openFolders} />
      <HierarchyCollection
        levelCount={number('Total number of levels', 4)}
        maxItemCount={number('Max number of items', 10)}
        index={0}
        open={openFolders}
      />
    </div>
  );
});
