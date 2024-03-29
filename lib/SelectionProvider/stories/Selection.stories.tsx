import React, { Fragment } from 'react';
import { SelectionProvider, SelectionContext } from '..';
import Button from '../../Button';
import StoryItem from '../../../stories/styleguide/StoryItem';

export default {
  title: 'Legacy/Selection'
};

const items = [...new Array(8)].map((i, index) => ({
  id: index + 1,
  type: index % 2 === 0 ? 'type-1' : 'type-2',
  data: { key: 'womp' }
}));

export function Selection() {
  return <>
    <StoryItem title="Selecting Items">
      <SelectionProvider>
        <SelectionContext.Consumer>
          {(context: any) => <>
            {items.map(i => (
              <Button
                onClick={() =>
                  context.updateSelected(i.id, 'type-1', { key: 'data' })
                }
              >
                {context.selected.includes(i.id)
                  ? 'selected'
                  : 'not selected'}
              </Button>
            ))}
            <Button types={['danger']} onClick={() => context.clear()}>
              Clear
            </Button>
          </>}
        </SelectionContext.Consumer>
      </SelectionProvider>
    </StoryItem>

    <StoryItem title="Restricting items using currentSelectedType">
      <SelectionProvider>
        <SelectionContext.Consumer>
          {(context: any) => <>
            {items.map(i => (
              <Button
                disabled={
                  context.currentSelectedType &&
                  i.type !== context.currentSelectedType
                }
                onClick={() => context.updateSelected(i.id, i.type, i.data)}
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
          </>}
        </SelectionContext.Consumer>
      </SelectionProvider>
    </StoryItem>
  </>
}

Selection.parameters = {
  controls: { hideNoControlsWarning: true }
};
