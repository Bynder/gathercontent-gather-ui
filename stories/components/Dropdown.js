import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import DropdownMenu from '../../lib/DropdownMenu/';
import StoryItem from '../styleguide/StoryItem';
import * as assets from '../../assets/data';

storiesOf('Components', module)
  .add('Dropdown Menu', () => {

    return (
      <div>
        <StoryItem
          title="Dropdown Menu"
          description="A dropdown menu that accepts a list of menu items.">
          <DropdownMenu value="Actions" caret shouldDisplay items={assets.getDropdownItems()} />
        </StoryItem>

        <StoryItem
          title="Dropdown without a button"
          description="A link that opens a dropdown.">
          <DropdownMenu value="Actions" type="link" caret shouldDisplay items={assets.getDropdownItems()} />
        </StoryItem>
      </div>
    );
  });
