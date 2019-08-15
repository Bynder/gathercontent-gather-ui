import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { SelectedObjectsProvider, SelectedObjectsContext } from '..';
import Button from '../../Button';
import StoryItem from '../../../stories/styleguide/StoryItem';

const stories = storiesOf('Components', module);

const items = [...new Array(5)].map((i, index) => ({
  id: index + 1
}));

stories.add('Selected Objects Provider', () => (
  <StoryItem title="Selecting Items">
    <SelectedObjectsProvider>
      <SelectedObjectsContext.Consumer>
        {context => (
          <Fragment>
            {items.map(i => (
              <Button onClick={() => context.updateSelected(i.id)}>
                {context.selected.includes(i.id) ? 'selected' : 'not selected'}
              </Button>
            ))}
            <Button types={['danger']} onClick={() => context.clear()}>
              {' '}
              Clear
            </Button>
          </Fragment>
        )}
      </SelectedObjectsContext.Consumer>
    </SelectedObjectsProvider>
  </StoryItem>
));
