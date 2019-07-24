import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array } from '@storybook/addon-knobs';
import notes from './README.md';
import { FolderRow, ItemRow, HierarchyCollection } from '..';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const createKnobCollection = index =>
  array(`Folders (${index})`, [`Folder ${index}`], ',').map(d => (
    <Fragment>
      <FolderRow>{d}</FolderRow>

      {array(`Items (${index})`, [`Item ${index}`], ',').map(i =>
        i ? <ItemRow>{i}</ItemRow> : null
      )}
    </Fragment>
  ));

stories.add(
  'HierarchyCollection',
  () => (
    <HierarchyCollection className={text('ClassName', '')}>
      <FolderRow>Root folder</FolderRow>
      <HierarchyCollection>
        {createKnobCollection(1)}

        <HierarchyCollection>
          {createKnobCollection(2.1)}
          {createKnobCollection(2.2)}

          <HierarchyCollection>
            {createKnobCollection(3)}

            <HierarchyCollection>{createKnobCollection(4)}</HierarchyCollection>
          </HierarchyCollection>
        </HierarchyCollection>
      </HierarchyCollection>
    </HierarchyCollection>
  ),
  {
    notes: { markdown: notes }
  }
);
