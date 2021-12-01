import React from 'react';
import { action } from '@storybook/addon-actions';
import SearchInput from '../../lib/SearchInput';
import StoryItem from '../styleguide/StoryItem';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'Components',
};

export const _SearchInput = () => {
  const value = text('search value', '');
  return (
    <div>
      <StoryItem
        title="Search field"
        description="An input that contains behaviour for live search capabilities."
      >
        <div className="flex">
          <SearchInput
            onChangeHandler={action('change')}
            id="search-input"
            label="Search"
            value={value}
            onClearHandler={action('clear')}
          />
        </div>
      </StoryItem>
      <StoryItem
        title="Search field with an initial value"
        description="Use the `initialValue` prop to set an initial value "
      >
        <SearchInput
          onChangeHandler={action('change')}
          initialValue="foo"
          value={value}
          onClearHandler={action('clear')}
        />
      </StoryItem>
    </div>
  );
};

_SearchInput.story = {
  name: 'SearchInput',
};
