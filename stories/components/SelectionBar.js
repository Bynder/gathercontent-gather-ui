import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { SelectionBar, Button, Icon } from '../../lib/';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('SelectionBar', () => {
    return (
      <div>
        <StoryItem
          title="SelectionBar"
        >
          <SelectionBar
            type="items"
            selectedIds={[1,2,3]}
            clearSelection={() => {}}
            selectAll={() => {}}
          >
            <Button
              clickHandler={() => {}}
              types={['icon-only']}
            >
              <Icon name="download" />
            </Button>
            <Button
              clickHandler={() => {}}
              types={['icon-only']}
            >
              <Icon name="trash" />
            </Button>
          </SelectionBar>
        </StoryItem>

        <StoryItem
          title="SelectionBar"
          description="fixed SelectionBar"
        >
          <SelectionBar
            type="items"
            selectedIds={[1,2,3,4,5,6,7,8,9]}
            clearSelection={() => {}}
            selectAll={() => {}}
            fixed
          >
            <Button
              clickHandler={() => {}}
              types={['icon-only']}
            >
              <Icon name="files" />
            </Button>
            <Button
              clickHandler={() => {}}
              types={['icon-only']}
            >
              <Icon name="save" />
            </Button>
            <Button
              clickHandler={() => {}}
              types={['icon-only']}
            >
              <Icon name="export" />
            </Button>
          </SelectionBar>
        </StoryItem>
      </div>
    );
  });
