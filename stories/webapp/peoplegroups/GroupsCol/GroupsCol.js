import React from 'react';
import { FinderNavigation } from 'lib';

const GroupsCol = ({ groups }) => (
  <FinderNavigation>
    <FinderNavigation.Group>
      <FinderNavigation.Item>
        <FinderNavigation.ItemContent>
          <a className="finder__item-link" href="google.com">
            <span className="finder__item-link-text">All users</span>
          </a>
        </FinderNavigation.ItemContent>
      </FinderNavigation.Item>
    </FinderNavigation.Group>
    <FinderNavigation.Group title="Groups">
      {groups.map(group => (
        <FinderNavigation.Item>
          <FinderNavigation.ItemContent>
            <a className="finder__item-link" href="google.com">
              <span className="finder__item-link-text">{group.name}</span>
            </a>
          </FinderNavigation.ItemContent>
        </FinderNavigation.Item>
      ))}
    </FinderNavigation.Group>
  </FinderNavigation>
);

export default GroupsCol;
