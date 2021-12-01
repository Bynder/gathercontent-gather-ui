import React from 'react';
import { action } from '@storybook/addon-actions';
import StoryItem from '../styleguide/StoryItem';
import { Search } from '../../lib';

export default {
  title: 'Components',
};

export const _Search = () => {
  return (
    <div>
      <StoryItem
        title="Search"
        description="Components that render a search ui"
      >
        <Search>
          <Search.Input onChange={() => {}} />
          <Search.Body>
            <Search.Options>
              <Search.ToggleFilter
                label="Search all projects"
                clickHandler={action('filter toggled')}
              />
            </Search.Options>
            <Search.List heading="Items">
              <Search.ListItem title="bloop" subText="123 435">
                hi there <em>waffles</em> hi!
              </Search.ListItem>
              <Search.ListItem title="blorp" subText="123 435">
                hhello!! <em>waffles</em> hi!
              </Search.ListItem>
            </Search.List>
            <Search.List heading="Content">
              <Search.ListItem title="bloop" subText="123 435">
                hi there <em>waffles</em> hi!
              </Search.ListItem>
              <Search.ListItem title="blorp" subText="123 435">
                hhello!! <em>waffles</em> hi!
              </Search.ListItem>
            </Search.List>
          </Search.Body>
        </Search>
      </StoryItem>
    </div>
  );
};
