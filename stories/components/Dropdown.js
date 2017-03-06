import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DropdownMenu from '../../lib/DropdownMenu/';
import FontAwesomeIcon from '../../lib/FontAwesomeIcon';
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
          title="Dropdown without a button"
          description="A link that opens a dropdown.">
          <DropdownMenu type="link" caret shouldDisplay items={assets.getDropdownItemsWithSeparator()}>
            Actions
          </DropdownMenu>
        </StoryItem>

        <StoryItem
          title="Dropdown link"
          description="A dropdown menu from a link style, without a caret">
          <DropdownMenu
            caret={false}
            type="link"
            direction="up"
            shouldDisplay
            items={assets.getDropdownItems()}>
              <FontAwesomeIcon style={{ fontSize: '18px' }} name="fa-cog"/>
          </DropdownMenu>
        </StoryItem>
      </div>
    );
  });
