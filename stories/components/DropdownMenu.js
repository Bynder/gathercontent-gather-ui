import React from 'react';
import { storiesOf } from '@storybook/react';
import { DropdownMenu } from 'lib/DropdownMenu';
import SearchDropdown from 'lib/SearchDropdown';
import StoryItem from '../styleguide/StoryItem';
import * as assets from '../../assets/data';

storiesOf('Components', module)
  .add('Dropdown Menu', () => {

    return (
      <div>
        <StoryItem
          title="Dropdown Menu"
          description="A dropdown menu that accepts a list of menu items.">
          <DropdownMenu value="Actions" caret shouldDisplay items={assets.getDropdownItems()}>
            Actions
          </DropdownMenu>
        </StoryItem>
        <StoryItem
          title="Dropdown Menu Disabled"
          description="A dropdown menu that takes a disabled attribute">
          <DropdownMenu value="Actions" type="outline" caret shouldDisplay items={assets.getDropdownItems()} disabled>
            Actions
          </DropdownMenu>
        </StoryItem>

        <StoryItem
          title="Dropdown Menu"
          description="A dropdown menu with an outline button and full width">
          <DropdownMenu fullWidth type="outline" value="Actions" downIcon shouldDisplay items={assets.getDropdownItems()}>
            Actions
          </DropdownMenu>
        </StoryItem>

        <StoryItem
          title="Dropdown Menu"
          description="A dropdown menu with an active item">
          <DropdownMenu fullWidth type="outline" value="Actions" downIcon shouldDisplay items={assets.getDropdownItemsWithActive()}>
            Actions
          </DropdownMenu>
        </StoryItem>

        <StoryItem
          title="Dropdown without a button"
          description="A link that opens a dropdown.">
          <DropdownMenu type="link" caret shouldDisplay items={assets.getDropdownItemsWithSeparator()}>
            Actions
          </DropdownMenu>
        </StoryItem>

        <StoryItem
          title="Dropdown link"
          description="A dropdown menu from a link style, without a caret">
          <SearchDropdown
            resultsTitle="Results"
            results={assets.getDropdownAvatar()}
          />
        </StoryItem>
      </div>
    );
  });
