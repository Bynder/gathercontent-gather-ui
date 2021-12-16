import React from 'react';
import { DropdownMenu as DropdownMenuComponent } from 'lib/DropdownMenu';
import SearchDropdown from 'lib/SearchDropdown';
import StoryItem from '../styleguide/StoryItem';
import * as assets from '../../assets/data';

export default {
  title: 'Legacy/Dropdowns/Dropdown Menu',
  component: DropdownMenuComponent
};

export const DropdownMenu = () => {
  return (
    <div>
      <StoryItem
        title="Dropdown Menu"
        description="A dropdown menu that accepts a list of menu items."
      >
        <DropdownMenuComponent
          value="Actions"
          caret
          shouldDisplay
          items={assets.getDropdownItems()}
        >
          Actions
        </DropdownMenuComponent>
      </StoryItem>
      <StoryItem
        title="Dropdown Menu Disabled"
        description="A dropdown menu that takes a disabled attribute"
      >
        <DropdownMenuComponent
          value="Actions"
          type="outline"
          caret
          shouldDisplay
          items={assets.getDropdownItems()}
          disabled
        >
          Actions
        </DropdownMenuComponent>
      </StoryItem>

      <StoryItem
        title="Dropdown Menu"
        description="A dropdown menu with an outline button and full width"
      >
        <DropdownMenuComponent
          fullWidth
          type="outline"
          value="Actions"
          downIcon
          shouldDisplay
          items={assets.getDropdownItems()}
        >
          Actions
        </DropdownMenuComponent>
      </StoryItem>

      <StoryItem
        title="Dropdown Menu"
        description="A dropdown menu with an active item"
      >
        <DropdownMenuComponent
          fullWidth
          type="outline"
          value="Actions"
          downIcon
          shouldDisplay
          items={assets.getDropdownItemsWithActive()}
        >
          Actions
        </DropdownMenuComponent>
      </StoryItem>

      <StoryItem
        title="Dropdown without a button"
        description="A link that opens a dropdown."
      >
        <DropdownMenuComponent
          type="link"
          caret
          shouldDisplay
          items={assets.getDropdownItemsWithSeparator()}
        >
          Actions
        </DropdownMenuComponent>
      </StoryItem>

      <StoryItem
        title="Dropdown link"
        description="A dropdown menu from a link style, without a caret"
      >
        <SearchDropdown
          resultsTitle="Results"
          results={assets.getDropdownAvatar()}
        />
      </StoryItem>
    </div>
  );
};

DropdownMenu.parameters = {
  controls: { hideNoControlsWarning: true }
};
