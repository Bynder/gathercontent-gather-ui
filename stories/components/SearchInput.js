import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchInput from '../../lib/SearchInput/';
import StoryItem from '../styleguide/StoryItem';

storiesOf('Components', module)
  .add('SearchInput', () => {
    return (
      <div>
        <StoryItem
          title="Search field"
          description="An input that contains behaviour for live search capabilities.">
          <SearchInput onChangeHandler={ action('change') } />
        </StoryItem>
      </div>
    );
  });
