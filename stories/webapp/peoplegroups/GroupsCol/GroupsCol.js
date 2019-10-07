import React from 'react';
import { shape, arrayOf } from 'prop-types';
import { FinderNavigation, Icon } from 'lib';

const GroupsCol = ({ groups }) => (
  <FinderNavigation>
    <FinderNavigation.Group>
      <FinderNavigation.Item active>
        <FinderNavigation.ItemContent active>
          <a className="finder__item-link" href="google.com">
            <Icon name="user" />
            <span className="finder__item-link-text h-margin-left-half">
              All users
            </span>
          </a>
        </FinderNavigation.ItemContent>
      </FinderNavigation.Item>
    </FinderNavigation.Group>
    <FinderNavigation.Group title="Groups">
      {groups.map(group => (
        <FinderNavigation.Item key={group.id}>
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

GroupsCol.propTypes = {
  groups: arrayOf(shape()).isRequired
};

export default GroupsCol;
