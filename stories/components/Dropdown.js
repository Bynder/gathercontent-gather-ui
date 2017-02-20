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
          description="A dropdown menu that accepts a list of menu items">
          <DropdownMenu value="Actions" caret shouldDisplay items={assets.getDropdownItems()} />
        </StoryItem>

        <StoryItem
          title="Dropdown Menu"
          description="A dropdown menu that accepts a list of menu items">
          {(() => {
            class Ex extends React.Component {
              constructor() {
                super();
                this.state = { display: false };
              }

              render() {
                <DropdownMenu value="Actions" caret shouldDisplay items={assets.getDropdownItems()} />
              }
            }
            return Ex;
          })()
          }
        </StoryItem>
      </div>
    );
  });
