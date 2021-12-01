import React from 'react';
import { Dropdown, Breadcrumb } from '../../lib';
import StoryItem from '../styleguide/StoryItem';

export default {
  title: 'Components',
};

export const _Breadcrumb = () => (
  <div>
    <StoryItem title="Breadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item>
          <div className="text-overflow-ellipsis" title="Energy Co. Redesign">
            Energy Co. Redesign
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>
    </StoryItem>

    <StoryItem title="Breadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item style={{ maxWidth: '20%' }}>
          <div className="text-overflow-ellipsis" title="Energy Co. Redesign">
            <a href="/">Energy Co. Redesign</a>
          </div>
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ maxWidth: '20%' }}>
          <div className="text-overflow-ellipsis" title="About">
            <a href="/">About</a>
          </div>
        </Breadcrumb.Item>
        <Breadcrumb.Item style={{ maxWidth: '50%' }}>
          <div className="text-overflow-ellipsis" title="History">
            History
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>
    </StoryItem>

    <StoryItem title="Breadcrumb">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Dropdown id="1">
            <Dropdown.Trigger>...</Dropdown.Trigger>
            <Dropdown.Content collapse>
              <Dropdown.ActionGroup>
                <a
                  href="/"
                  className="dropdown__action"
                  title="Energy Co. Redesign"
                >
                  Energy Co. Redesign
                </a>
              </Dropdown.ActionGroup>
            </Dropdown.Content>
          </Dropdown>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <div className="text-overflow-ellipsis">
            <a href="/" title="About">
              About
            </a>
          </div>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <div className="text-overflow-ellipsis" title="History">
            History
          </div>
        </Breadcrumb.Item>
      </Breadcrumb>
    </StoryItem>
  </div>
);
