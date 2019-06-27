import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown, Breadcrumb, Icon } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

const dropdown = (
  <Dropdown id="1">
    <Dropdown.Trigger>
      <Icon name="menuDotted" />
    </Dropdown.Trigger>

    <Dropdown.Content collapse>
      <Dropdown.ActionGroup>
        <Dropdown.Action action={() => {}}>
          Rename folder
        </Dropdown.Action>
        <Dropdown.Action action={() => {}}>
          Copy URL
        </Dropdown.Action>
      </Dropdown.ActionGroup>
      <Dropdown.ActionGroup>
        <Dropdown.Action action={() => {}}>
          Move to trash
        </Dropdown.Action>
      </Dropdown.ActionGroup>
    </Dropdown.Content>
  </Dropdown>
);

storiesOf('Components', module).add('Breadcrumb', () => (
  <div>
    <StoryItem title="Breadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item>
          <div className="text-overflow-ellipsis" title="Energy Co. Redesign">
            Energy Co. Redesign
          </div>
          {dropdown}
        </Breadcrumb.Item>
      </Breadcrumb>
    </StoryItem>

    <StoryItem title="Breadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item>
          <div className="text-overflow-ellipsis" style={{ width: '100px' }} title="Energy Co. Redesign">
            <a href="/">Energy Co. Redesign</a>
          </div>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <div className="text-overflow-ellipsis" title="About">
            <a href="/">About</a>
          </div>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <div className="text-overflow-ellipsis" title="History">
            History
          </div>
          {dropdown}
        </Breadcrumb.Item>
      </Breadcrumb>
    </StoryItem>

    <StoryItem title="Breadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Dropdown id="1">
            <Dropdown.Trigger>
              ...
            </Dropdown.Trigger>
            <Dropdown.Content collapse>
              <Dropdown.ActionGroup>
                <a href="/" className="dropdown__action" title="Energy Co. Redesign">Energy Co. Redesign</a>
              </Dropdown.ActionGroup>
            </Dropdown.Content>
          </Dropdown>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <div className="text-overflow-ellipsis">
            <a href="/" title="About">About</a>
          </div>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <div className="text-overflow-ellipsis" title="History">
            History
          </div>
          {dropdown}
        </Breadcrumb.Item>
      </Breadcrumb>
    </StoryItem>
  </div>
));
