import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { createFolderRow } from './createFolderRow';
import { createItemRow } from './createItemRow';

const stories = storiesOf('Web app', module);
stories.addDecorator(withKnobs);

const createCollection = (levelCount, maxItemCount, index) =>
  levelCount ? (
    <div className="h-margin-left">
      {createFolderRow()}
      {[...Array(Math.floor(Math.random() * maxItemCount || 0)).keys()].map(
        () => createItemRow()
      )}
      {index + 1 !== levelCount &&
        createCollection(levelCount, maxItemCount, index + 1)}
    </div>
  ) : null;

stories.add('Hierarchy', () => (
  <div>
    {createFolderRow()}
    {createCollection(
      number('# of levels', 4),
      number('max # of items', 10),
      0
    )}
  </div>
));
