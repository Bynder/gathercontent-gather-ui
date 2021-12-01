import React from 'react';
import pluralize from 'pluralize';
import { SelectionBar, Button, Icon } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _SelectionBar = () => {
  const example1selectedIds = [1, 2, 3];
  const example2selectedIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const type = 'items';

  return (
    <div>
      <StoryItem title="SelectionBar">
        <SelectionBar hasSelected={example1selectedIds.length}>
          <SelectionBar.Information>
            <Button
              clickHandler={() => {}}
              types={['link-default']}
              className="selection-bar__all"
            >
              Select all
            </Button>
            <span className="selection-bar__count">
              {example1selectedIds.length}
            </span>
            <span className="selection-bar__type">
              {pluralize(type, example1selectedIds.length)} selected
            </span>
          </SelectionBar.Information>
          <SelectionBar.Actions>
            <SelectionBar.Action>
              <Button clickHandler={() => {}} types={['icon-only']}>
                <Icon name="download" />
              </Button>
            </SelectionBar.Action>
            <SelectionBar.Action>
              <Button clickHandler={() => {}} types={['icon-only']}>
                <Icon name="trash" />
              </Button>
            </SelectionBar.Action>
          </SelectionBar.Actions>
        </SelectionBar>
      </StoryItem>

      <StoryItem title="SelectionBar" description="fixed SelectionBar">
        <SelectionBar hasSelected={example2selectedIds.length} fixed>
          <SelectionBar.Information>
            <Button
              clickHandler={() => {}}
              types={['link-default']}
              className="selection-bar__all"
            >
              Select all
            </Button>
            <span className="selection-bar__count">
              {example2selectedIds.length}
            </span>
            <span className="selection-bar__type">
              {pluralize(type, example2selectedIds.length)} selected
            </span>
          </SelectionBar.Information>
          <SelectionBar.Actions>
            <SelectionBar.Action>
              <Button clickHandler={() => {}} types={['icon-only']}>
                <Icon name="files" />
              </Button>
            </SelectionBar.Action>
            <SelectionBar.Action>
              <Button clickHandler={() => {}} types={['icon-only']}>
                <Icon name="save" />
              </Button>
            </SelectionBar.Action>
            <SelectionBar.Action>
              <Button clickHandler={() => {}} types={['icon-only']}>
                <Icon name="export" />
              </Button>
            </SelectionBar.Action>
          </SelectionBar.Actions>
        </SelectionBar>
      </StoryItem>
    </div>
  );
};

_SelectionBar.story = {
  name: 'SelectionBar',
};
