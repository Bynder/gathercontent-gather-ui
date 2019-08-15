import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { SelectedObjectsProvider, SelectedObjectsContext } from '..';
import Button from '../../Button';
import StoryItem from '../../../stories/styleguide/StoryItem';

const stories = storiesOf('Components', module);

const items = [...new Array(8)].map((i, index) => ({
  id: index + 1,
  type: index % 2 === 0 ? 'type-1' : 'type-2'
}));

stories.add('Selected Objects Provider', () => (
  <>
    <StoryItem title="Selecting Items">
      <SelectedObjectsProvider>
        <SelectedObjectsContext.Consumer>
          {context => (
            <Fragment>
              {items.map(i => (
                <Button onClick={() => context.updateSelected(i.id)}>
                  {context.selected.includes(i.id)
                    ? 'selected'
                    : 'not selected'}
                </Button>
              ))}
              <Button types={['danger']} onClick={() => context.clear()}>
                Clear
              </Button>
            </Fragment>
          )}
        </SelectedObjectsContext.Consumer>
      </SelectedObjectsProvider>
    </StoryItem>

    <StoryItem title="Restricting items using currentSelectedType">
      <SelectedObjectsProvider>
        <SelectedObjectsContext.Consumer>
          {context => (
            <Fragment>
              {items.map(i => (
                <Button
                  disabled={
                    context.currentSelectedType &&
                    i.type !== context.currentSelectedType
                  }
                  onClick={() => context.updateSelected(i.id, i.type)}
                  types={i.type === 'type-1' ? ['primary'] : ['outline']}
                >
                  {context.selected.includes(i.id)
                    ? 'selected'
                    : 'not selected'}
                </Button>
              ))}
              <Button types={['danger']} onClick={() => context.clear()}>
                Clear
              </Button>
            </Fragment>
          )}
        </SelectedObjectsContext.Consumer>
      </SelectedObjectsProvider>
    </StoryItem>
  </>
));
